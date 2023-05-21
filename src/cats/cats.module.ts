import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController, CatsViewController } from './cats.controller';

@Module({
  controllers: [CatsController, CatsViewController],
  providers: [CatsService]
})
export class CatsModule {}
