import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DictatorsService } from './dictators.service';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';
import { Dictator } from './entities/dictator.entity';
import { Slave } from 'src/slaves/entities/slave.entity';

@Controller('dictators')
export class DictatorsController {
  constructor(private readonly dictatorsService: DictatorsService) {}

  @Post()
  create(@Body() createDictatorDto: CreateDictatorDto): Promise<Dictator> {
    return this.dictatorsService.create(createDictatorDto);
  }

  @Get()
  findAll() {
    return this.dictatorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dictatorsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDictatorDto: UpdateDictatorDto) {
    return this.dictatorsService.update(id, updateDictatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dictatorsService.remove(id);
  }
  @Get(':dicname/slaves')
  async getSlavesOwned(@Param('dicname') dicname: string): Promise<Slave[]> {
    return this.dictatorsService.findSlavesOwned(dicname);
  }
}
