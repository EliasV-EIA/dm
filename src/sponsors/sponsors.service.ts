import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sponsor } from './entities/sponsor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SponsorsService {
  constructor(
    @InjectRepository(Sponsor)
    private readonly sponsorRepository:Repository<Sponsor>
  ){}
  async create(createSponsorDto: CreateSponsorDto): Promise<Sponsor> {
    const newSponsor=this.sponsorRepository.create(createSponsorDto);
    await this.sponsorRepository.save(newSponsor)
    return newSponsor;
  }

  findAll() {
    return this.sponsorRepository.find({});
  }

 async findOne(id: string) {
     const temp= await this.sponsorRepository.findOneBy({id:id});
     if(!temp){
       throw new NotFoundException(`Sponsor #${id} not found`)
     }
     return temp
   }

      async update(id: string, updateSponsorDto: UpdateSponsorDto) {
        const temp=await this.sponsorRepository.preload({id:id,...updateSponsorDto});
        if(!temp){
          throw new NotFoundException(`Sponsor #${id} not found`);
        }
        await this.sponsorRepository.save(temp);
        return temp;
      }
    
      remove(id: string) {
        const temp=this.findOne(id);
        this.sponsorRepository.delete({id:id}); 
        return temp;  }
  
}
