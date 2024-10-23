/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NavbarDocument = Navbar & Document;


export class NavItem {
    @Prop()
    name: string;

    @Prop()
    link: string; // Optional

    @Prop({ type: [{ name: String, link: String }] })
    withlink: { name: string; link: string }[];
}

@Schema({ timestamps: true })
export class Navbar {
    @Prop()
    logo: string;


    @Prop()
    links: NavItem[];

    @Prop()
    navButton: string;
}

export const NavbarSchema = SchemaFactory.createForClass(Navbar);
