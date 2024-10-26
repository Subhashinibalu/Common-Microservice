/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatDocument = Chat & Document;

@Schema({ timestamps: true })
export class Chat {
  @Prop()
    from: string;
  
  @Prop()
    to: string;

  @Prop()
  usermessage: [string];

  @Prop()
  adminreply: [string];

  @Prop()
  deletedAt: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
