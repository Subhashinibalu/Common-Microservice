/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @MessagePattern({ cmd: 'upsert_chat' })
  async upsert(@Payload() body: any) {
    return this.chatService.upsert(body);
  }

  @MessagePattern({ cmd: 'find_all_chats' })
  async findAll() {
    return this.chatService.findAll();
  }
}
