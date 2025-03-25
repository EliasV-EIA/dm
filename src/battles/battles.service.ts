import { Injectable, NotFoundException } from '@nestjs/common';
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

  async findOne(id: string) {
      const temp= await this.battleRepository.findOneBy({id:id});
      if(!temp){
        throw new NotFoundException(`Battle #${id} not found`)
      }
      return temp
    }

    async update(id: string, updateBattleDto: UpdateBattleDto) {
      const temp=await this.battleRepository.preload({id:id,...updateBattleDto});
      if(!temp){
        throw new NotFoundException(`Battle #${id} not found`);
      }
      await this.battleRepository.save(temp);
      return temp;
    }
  
    remove(id: string) {
      const temp=this.findOne(id);
      this.battleRepository.delete({id:id}); 
      return temp;  }

}
