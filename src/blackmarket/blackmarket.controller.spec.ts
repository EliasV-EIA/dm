import { Test, TestingModule } from '@nestjs/testing';
import { BlackmarketController } from './blackmarket.controller';
import { BlackmarketService } from './blackmarket.service';

describe('BlackmarketController', () => {
  let controller: BlackmarketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlackmarketController],
      providers: [BlackmarketService],
    }).compile();

    controller = module.get<BlackmarketController>(BlackmarketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
