import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';
import { Repository } from 'typeorm';
import { Slave } from 'src/slaves/entities/slave.entity';

@Injectable()
export class DictatorsService {
  constructor(
    @InjectRepository(Dictator)
    private readonly dictatorRepository:Repository<Dictator>,
    @InjectRepository(Slave)
    private readonly slaveRepository:Repository<Slave>

  ){}

  async create(createDictatorDto: CreateDictatorDto) {
    const newDictator=this.dictatorRepository.create(createDictatorDto); 
    await this.dictatorRepository.save(newDictator);
    return newDictator;
  }

  findAll() {
    return this.dictatorRepository.find({});
  }

  async findOne(id: string) {
    const temp= await this.dictatorRepository.findOneBy({id:id});
    if(!temp){
      throw new NotFoundException(`Dictator #${id} not found`)
    }
    return temp
  } 

  async update(id: string, updateDictatorDto: UpdateDictatorDto) {
    const temp=await this.dictatorRepository.preload({id:id,...updateDictatorDto});
    if(!temp){
      throw new NotFoundException(`Dictator #${id} not found`);
    }
    await this.dictatorRepository.save(temp);
    return temp;
  }

  remove(id: string) {
    const temp=this.findOne(id);
    this.dictatorRepository.delete({id:id}); 
    return temp;  }
  async findSlavesOwned(name: string): Promise<Slave[]> {
    const slaves = await this.slaveRepository.find({
      where: { origin:    name  }
    });
    
    return slaves;
  }
}
