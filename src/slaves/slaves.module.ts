import { Module } from '@nestjs/common';
import { SlavesService } from './slaves.service';
import { SlavesController } from './slaves.controller';

@Module({
  controllers: [SlavesController],
  providers: [SlavesService],
})
export class SlavesModule {}
