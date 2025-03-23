import { Module } from '@nestjs/common';
import { BlackmarketService } from './blackmarket.service';
import { BlackmarketController } from './blackmarket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blackmarket } from './entities/blackmarket.entity';
import { Slave } from 'src/slaves/entities/slave.entity';
import { Dictator } from 'src/dictators/entities/dictator.entity';
import { Sponsor } from 'src/sponsors/entities/sponsor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blackmarket,Slave,Dictator,Sponsor])],
  controllers: [BlackmarketController],
  providers: [BlackmarketService],
  exports:[BlackmarketService,TypeOrmModule]
})
export class BlackmarketModule {}
