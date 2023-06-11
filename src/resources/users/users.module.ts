import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './users.schema';
import { UsersAPIController } from './users.api.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersAPIController,UsersController],
  providers: [UsersService],
  exports: [TypeOrmModule]
})
export class UsersModule {}
