import { Module } from '@nestjs/common';
import { DictatorsService } from './dictators.service';
import { DictatorsController } from './dictators.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Dictator])],
  controllers: [DictatorsController],
  providers: [DictatorsService],
  exports:[DictatorsService,TypeOrmModule]
})
export class DictatorsModule {}
