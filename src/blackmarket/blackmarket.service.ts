import { Injectable } from '@nestjs/common';
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

  findOne(id: string) {
    return `This action returns a #${id} blackmarket`;
  }

  update(id: string, updateBlackmarketDto: UpdateBlackmarketDto) {
    return `This action updates a #${id} blackmarket`;
  }

  remove(id: string) {
    return `This action removes a #${id} blackmarket`;
  }
}
