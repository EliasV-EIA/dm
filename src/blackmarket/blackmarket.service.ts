import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlackmarketDto } from './dto/create-blackmarket.dto';
import { UpdateBlackmarketDto } from './dto/update-blackmarket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Blackmarket } from './entities/blackmarket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BlackmarketService {

constructor(@InjectRepository(Blackmarket)
  private readonly blackmarketRepository:Repository<Blackmarket>,
){}
  async create(createBlackmarketDto: CreateBlackmarketDto) : Promise<Blackmarket>{
    const newBlackmarket=this.blackmarketRepository.create(createBlackmarketDto);
    await this.blackmarketRepository.save(newBlackmarket);
    return newBlackmarket;
  }

  findAll() {
    return this.blackmarketRepository.find({});
  }

 async findOne(id: string) {
     const temp= await this.blackmarketRepository.findOneBy({id:id});
     if(!temp){
       throw new NotFoundException(`Blackmarket #${id} not found`)
     }
     return temp;
   }

      async update(id: string, updateBlackmarketDto: UpdateBlackmarketDto) {
        const temp=await this.blackmarketRepository.preload({id:id,...updateBlackmarketDto});
        if(!temp){
          throw new NotFoundException(`Blackmarket #${id} not found`);
        }
        await this.blackmarketRepository.save(temp);
        return temp;
      }
    
      remove(id: string) {
        const temp=this.findOne(id);
        this.blackmarketRepository.delete({id:id}); 
        return temp;  }
  
}
