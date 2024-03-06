import { Test, TestingModule } from '@nestjs/testing';
import { BaseEntityController } from './base-entity.controller';
import { BaseEntityService } from './base-entity.service';

describe('BaseEntityController', () => {
  let controller: BaseEntityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BaseEntityController],
      providers: [BaseEntityService],
    }).compile();

    controller = module.get<BaseEntityController>(BaseEntityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
