/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Chat, ChatDocument } from './chat.schema';

@Injectable()
export class ChatService {
  constructor(@InjectModel(Chat.name) private chatModel: Model<ChatDocument>) {}

 
  async upsert(body: any) {
    const { _id, ...data } = body; // Extract _id for upsert
  
    // If _id is not provided, create a new one
    if (!_id) {
      const newChat= new this.chatModel(data);
      return await newChat.save(); // Save new document
    }
  
    // Perform the update without including _id in data
    return await this.chatModel.findOneAndUpdate(
      { _id }, // Find by _id
      { ...data }, // Only include other fields for the update
      { new: true, upsert: true } // Options
    ).exec();
  }
  

  async findAll() {
    const contacts = await this.chatModel.find().exec();
    if (!contacts || contacts.length === 0) {
      throw new Error('No chats found');
    }
    return contacts;    
  }
}
