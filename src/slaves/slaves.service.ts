import { Injectable } from '@nestjs/common';
import { CreateSlaveDto } from './dto/create-slave.dto';
import { UpdateSlaveDto } from './dto/update-slave.dto';

@Injectable()
export class SlavesService {
  create(createSlaveDto: CreateSlaveDto) {
    return 'This action adds a new slave';
  }

  findAll() {
    return `This action returns all slaves`;
  }

  findOne(id: number) {
    return `This action returns a #${id} slave`;
  }

  update(id: number, updateSlaveDto: UpdateSlaveDto) {
    return `This action updates a #${id} slave`;
  }

  remove(id: number) {
    return `This action removes a #${id} slave`;
  }
}
