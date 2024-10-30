/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TicketDocument = Ticket & Document;

@Schema({ timestamps: true })
export class Ticket {
  @Prop()
  sessionId: string;

  @Prop()
  deletedAt: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
