import { Injectable, NotFoundException } from '@nestjs/common';
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
    const newSlave=this.slaveRepository.create(createSlaveDto); 
    await this.slaveRepository.save(newSlave);
    return newSlave;
  }

  findAll() {
    return this.slaveRepository.find({});  }

  async findOne(id: string) {
      const temp= await this.slaveRepository.findOneBy({id:id});
      if(!temp){
        throw new NotFoundException(`Slave #${id} not found`)
      }
      return temp
    }

    async update(id: string, updateSlaveDto: UpdateSlaveDto) {
      const temp=await this.slaveRepository.preload({id:id,...updateSlaveDto});
      if(!temp){
        throw new NotFoundException(`Slace #${id} not found`);
      }
      await this.slaveRepository.save(temp);
      return temp;
    }
  
    remove(id: string) {
      const temp=this.findOne(id);
      this.slaveRepository.delete({id:id}); 
      return temp;  }

}
