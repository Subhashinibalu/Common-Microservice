/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AboutDocument = About & Document;

export class Card {
  @Prop()
  acardicon: string;

  @Prop()
  acardtitle: string;

  @Prop()
  acardcontent: string;

}

@Schema({ timestamps: true })
export class About {
  @Prop()
  abouttitle: string;

  @Prop()
  aboutsub: string;

  @Prop()
  aboutheading: string;

  @Prop({ type: [String]})
  aboutlist: string[];

  @Prop({ type: Object })
  aboutimgdiv: {
    aboutimg1: Buffer;
    aboutinfo: string;
    aboutimg2: Buffer;
  };

  @Prop({ type: Object})
  aboutcarddiv: {
    aboutquestion: string;
    aboutanswer: string;
    aboutcards: [Card]; 
  };
  
  @Prop()
  deletedAt: Date;
}

export const AboutSchema = SchemaFactory.createForClass(About);
