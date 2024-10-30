import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Chat, ChatSchema } from './chat.schema';
import { TicketModule } from 'src/ticket/ticket.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]), // Ensure this is included
  TicketModule],
  providers: [ChatService],
  controllers: [ChatController],
  exports:[ChatService]
})
export class ChatModule {}
