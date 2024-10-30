import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export class adminReply {
  @Prop()
  adminMail: string;
  @Prop()
  adminMessage: string;
}

export class Message {
  @Prop()
  usermessage: string;

  @Prop()
  adminreply: adminReply;
}

export type ChatDocument = Chat & Document;

@Schema({ timestamps: true })
export class Chat {
  @Prop()
  from: string; 

  @Prop()
  to: string;

  @Prop({ type: [Message], default: [] }) 
  message: Message[];

  @Prop({ type: String, required: false })
  ticket?: string; 
  

  @Prop()
  deletedAt: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
