import { Controller, Get, Req, Res } from '@nestjs/common';
import { Roles } from './../../decorators/roles/roles.decorator';
import { ChatService } from './chat.service';
import { Request, Response } from 'express';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
  ) {}

  @Get('/')
  @Roles('admin') // custom decorator
  async chatView(@Req() request: Request, @Res() response: Response) {
    response.render('chat');
  }
}
