// src/navbar/navbar.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Navbar, NavbarDocument } from './navbar.schema';

@Injectable()
export class NavbarService {
    constructor(@InjectModel(Navbar.name) private navbarModel: Model<NavbarDocument>) {}

    async create(body: any) {
        const { _id, ...data } = body;

        return this.navbarModel.findOneAndUpdate(
            { _id }, // The condition to find the existing document
            data,    // The new data to set
            { new: true, upsert: true } // Options: return the updated document and create if not found
        ).exec();
    }

    async findAll(): Promise<Navbar[]> {
        const nav = await this.navbarModel.find().exec();
        if (!nav || nav.length === 0) {
            throw new NotFoundException('No nav documents found');
        }
        return nav;    
    }

    // Add more methods for update, delete, etc.
}
