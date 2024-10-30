import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat, ChatDocument } from './chat.schema';
import { TicketService } from '../ticket/ticket.service';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat.name) private chatModel: Model<ChatDocument>,
    private ticketService: TicketService 
  ) {}

  async upsert(body: any) {
    const { from, message, ...data } = body; 
    let chat = await this.chatModel.findOne({ from }).exec();

    if (!chat) {
      const newChat = new this.chatModel({
        from,
        message: [{ usermessage: message, adminreply: null }], 
        ...data
      });
      return await newChat.save(); 
    } else {
      const ticketId = await this.ticketService.find({ from });
      if (ticketId) {
        chat.ticket = ticketId; // This should now be valid
        console.log('Ticket exists:', ticketId);
      } else {
        console.log('No ticket found for sessionId:', from);
        chat.ticket = null; // Explicitly set to null if no ticket found
      }
      chat.message.push({ usermessage: message, adminreply: null }); 
      return await chat.save(); 
    }
  }
  async upsertadminchat(body: any) {
    const { from, message, ...data } = body; 
    let chat = await this.chatModel.findOne({ from }).exec();

    if (!chat) {
      const newChat = new this.chatModel({
        from,
        message: [{ usermessage: message, adminreply: null }], 
        ...data
      });
      return await newChat.save(); 
    } else {
      const ticketId = await this.ticketService.find({ from });
      if (ticketId) {
        chat.ticket = ticketId; 
        console.log('Ticket exists:', ticketId);
      } else {
        console.log('No ticket found for sessionId:', from);
        chat.ticket = null;
      }
      chat.message.push({ usermessage: message, adminreply: null }); 
      return await chat.save(); 
    }
  }
  async findAll() {
    const contacts = await this.chatModel.find().exec();
    if (!contacts || contacts.length === 0) {
      throw new Error('No chats found');
    }
    return contacts;    
  }
}
