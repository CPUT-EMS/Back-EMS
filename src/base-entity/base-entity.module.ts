import { Module } from '@nestjs/common';
import { BaseEntityService } from './base-entity.service';
import { BaseEntityController } from './base-entity.controller';

@Module({
  controllers: [BaseEntityController],
  providers: [BaseEntityService],
})
export class BaseEntityModule {}
