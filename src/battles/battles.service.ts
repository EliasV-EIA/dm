import { Injectable } from '@nestjs/common';
import { CreateBattleDto } from './dto/create-battle.dto';
import { UpdateBattleDto } from './dto/update-battle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Battle } from './entities/battle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BattlesService {
  constructor(
    @InjectRepository(Battle)
    private readonly battleRepository:Repository<Battle>,
  ){}

  async create(createBattleDto: CreateBattleDto): Promise<Battle> {
    const newBattle=this.battleRepository.create(createBattleDto);
    await this.battleRepository.save(newBattle);
    return newBattle;
  }

  findAll() {
    return this.battleRepository.find({});
  }

  findOne(id: string) {
    return `This action returns a #${id} battle`;
  }

  update(id: string, updateBattleDto: UpdateBattleDto) {
    return `This action updates a #${id} battle`;
  }

  remove(id: string) {
    return `This action removes a #${id} battle`;
  }
}
