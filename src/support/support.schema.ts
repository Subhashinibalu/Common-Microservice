/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SupportDocument = Support & Document;


class Card {
  @Prop()
  scardicon: string;

  @Prop()
  scardh5: string;

  @Prop()
  scardp: string;

  @Prop()
  scardbtn: string;
}


class Div1 {
  @Prop()
  div1icon: string;

  @Prop()
  div1title: string;

  @Prop()
  div1text: string;

  @Prop()
  div1btntxt: string;
}


class Div2 {
  @Prop()
  div2icon: string;

  @Prop()
  div2title: string;

  @Prop()
  div2text: string;

  @Prop()
  div2btntxt: string;
}


class Whatsapp {
  @Prop()
  whatsapph: string;

  @Prop()
  whatsappinfo: string;

  @Prop()
  whatsappbtn: string;
}

@Schema({ timestamps: true })
export class Support {
  @Prop()
  supporttitle: string;

  @Prop()
  supportsub1: string;

  @Prop()
  supportsub2: string;

  @Prop()
  supporth: string;

  @Prop()
  supportdiv1: Div1;

  @Prop()
  supportdiv2: Div2;

  @Prop()
  supportquestion: string;

  @Prop()
  supportanswer: string;

  @Prop()
  supportcard: [Card];

  @Prop()
  whatsapp: Whatsapp;

  @Prop()
  deletedAt: Date;
}

export const SupportSchema = SchemaFactory.createForClass(Support);
