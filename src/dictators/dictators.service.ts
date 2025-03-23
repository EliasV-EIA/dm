import { Injectable } from '@nestjs/common';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DictatorsService {
  constructor(
    @InjectRepository(Dictator)
    private readonly dictatorRepository:Repository<Dictator>,

  ){}

  async create(createDictatorDto: CreateDictatorDto) {
    const newDictator=this.dictatorRepository.create(createDictatorDto); 
    await this.dictatorRepository.save(newDictator);
    return newDictator;
  }

  findAll() {
    return this.dictatorRepository.find({});
  }

  findOne(id: string) {
    return `This action returns a #${id} dictator`;
  }

  update(id: string, updateDictatorDto: UpdateDictatorDto) {
    return `This action updates a #${id} dictator`;
  }

  remove(id: string) {
    return `This action removes a #${id} dictator`;
  }
}
