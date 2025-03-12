import { Injectable } from '@nestjs/common';
import { CreateBlackmarketDto } from './dto/create-blackmarket.dto';
import { UpdateBlackmarketDto } from './dto/update-blackmarket.dto';

@Injectable()
export class BlackmarketService {
  create(createBlackmarketDto: CreateBlackmarketDto) {
    return 'This action adds a new blackmarket';
  }

  findAll() {
    return `This action returns all blackmarket`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blackmarket`;
  }

  update(id: number, updateBlackmarketDto: UpdateBlackmarketDto) {
    return `This action updates a #${id} blackmarket`;
  }

  remove(id: number) {
    return `This action removes a #${id} blackmarket`;
  }
}
