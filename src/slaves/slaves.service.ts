import { Injectable } from '@nestjs/common';
import { CreateSlaveDto } from './dto/create-slave.dto';
import { UpdateSlaveDto } from './dto/update-slave.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Slave } from './entities/slave.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SlavesService {
  constructor(    
    @InjectRepository(Slave)
    private readonly slaveRepository:Repository<Slave>,

){}
  
  async create(createSlaveDto: CreateSlaveDto): Promise<Slave> {
    const {name , nickname, origin, strength, agility, state, wins, losses} = createSlaveDto;
    const newSlave=this.slaveRepository.create(createSlaveDto); 
    await this.slaveRepository.save(newSlave);
    return newSlave;
  }

  findAll() {
    return this.slaveRepository.find({});  }

  findOne(id: string) {
    return `This action returns a #${id} slave`;
  }

  update(id: string, updateSlaveDto: UpdateSlaveDto) {
    return `This action updates a #${id} slave`;
  }

  remove(id: string) {
    return `This action removes a #${id} slave`;
  }
}
