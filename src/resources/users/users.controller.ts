import { Controller, Get, Req, Res } from '@nestjs/common';
import { Roles } from './../../decorators/roles/roles.decorator';
import { UsersService } from './users.service';
import { Request, Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
  ) {}

  @Get()
  @Roles('admin') // custom decorator
  async view(@Req() request: Request, @Res() response: Response) {
    const data = await this.userService.findAll();
    response.render('users', {users: data.users});
  }

  @Get('/chat')
  @Roles('admin') // custom decorator
  async chatView(@Req() request: Request, @Res() response: Response) {
    response.render('chat');
  }
}
