import { Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController, CatsViewController } from './cats.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [CatsController, CatsViewController],
  providers: [CatsService]
})
export class CatsModule {}
