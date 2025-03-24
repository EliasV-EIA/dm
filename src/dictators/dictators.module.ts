import { Module } from '@nestjs/common';
import { DictatorsService } from './dictators.service';
import { DictatorsController } from './dictators.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';
import { Slave } from 'src/slaves/entities/slave.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Dictator,Slave])],
  controllers: [DictatorsController],
  providers: [DictatorsService],
  exports:[DictatorsService,TypeOrmModule]
})
export class DictatorsModule {}
