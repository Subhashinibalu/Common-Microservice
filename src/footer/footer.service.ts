// src/footer/footer.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Footer, FooterDocument } from './footer.schema';

@Injectable()
export class FooterService {
    constructor(@InjectModel(Footer.name) private footerModel: Model<FooterDocument>) {}

    async create(body: any) {
        const { _id, ...data } = body; // Extract `_id` and the rest of the data
        return this.footerModel.findOneAndUpdate(
            { _id }, // The condition to find the existing document
            data,    // The new data to set
            { new: true, upsert: true } // Options: return the updated document and create if not found
        ).exec();
    }

    async findAll() {
        const footers = await this.footerModel.find().exec();
        if (!footers || footers.length === 0) {
            throw new NotFoundException('No footer documents found');
        }
        return footers;
    }

    // Add more methods for update, delete, etc.
}
