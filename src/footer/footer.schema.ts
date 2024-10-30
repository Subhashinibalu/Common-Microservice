/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FooterItemDocument = FooterItem & Document;

@Schema()
export class FooterItem {
    @Prop()
    name: string;

    @Prop()
    link: string; 
}

export const FooterItemSchema = SchemaFactory.createForClass(FooterItem);

export type FooterDocument = Footer & Document;

@Schema({ timestamps: true })
export class Footer {
    @Prop()
    footerlogo: string;

    @Prop()
    foooterp1: string;

    @Prop()
    footerp2: string;

    @Prop()
    footerspan: string;

    @Prop({ type: { name: String, items: [String] } })
    products: {
        name: string;
        items: string[];
    };

    @Prop({ type: { name: String, items: [FooterItemSchema] } })
    company: {
        name: string;
        items: FooterItem[];
    };

    @Prop({ type: { name: String, items: [String] } })
    support: {
        name: string;
        items: string[];
    };

    @Prop({ type: { name: String, items: [String] } })
    partner: {
        name: string;
        items: string[];
    };

    @Prop({ type: { name: String, items: [FooterItemSchema] } })
    account: {
        name: string;
        items: FooterItem[];
    };
}

export const FooterSchema = SchemaFactory.createForClass(Footer);
