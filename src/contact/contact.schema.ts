/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema({ timestamps: true })
export class Contact {
  @Prop()
  contacttitle: string;

  @Prop()
  contactsub1: string;

  @Prop()
  contacth: string;

  @Prop()
  contactp: string;

  @Prop()
  deletedAt: Date;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);
