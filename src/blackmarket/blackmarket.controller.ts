import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlackmarketService } from './blackmarket.service';
import { CreateBlackmarketDto } from './dto/create-blackmarket.dto';
import { UpdateBlackmarketDto } from './dto/update-blackmarket.dto';

@Controller('blackmarket')
export class BlackmarketController {
  constructor(private readonly blackmarketService: BlackmarketService) {}

  @Post()
  create(@Body() createBlackmarketDto: CreateBlackmarketDto) {
    return this.blackmarketService.create(createBlackmarketDto);
  }

  @Get()
  findAll() {
    return this.blackmarketService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blackmarketService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlackmarketDto: UpdateBlackmarketDto) {
    return this.blackmarketService.update(+id, updateBlackmarketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blackmarketService.remove(+id);
  }
}
