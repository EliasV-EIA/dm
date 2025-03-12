import { Module } from '@nestjs/common';
import { BlackmarketService } from './blackmarket.service';
import { BlackmarketController } from './blackmarket.controller';

@Module({
  controllers: [BlackmarketController],
  providers: [BlackmarketService],
})
export class BlackmarketModule {}
