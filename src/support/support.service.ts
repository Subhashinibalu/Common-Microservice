import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Support, SupportDocument } from './support.schema';

@Injectable()
export class SupportService {
  constructor(@InjectModel(Support.name) private supportModel: Model<SupportDocument>) {}

  async create(body) {
    const { _id, ...data } = body; // Assume `_id` is the unique identifier for the contact

    return this.supportModel.findOneAndUpdate(
      { _id: _id }, // The condition to find the existing document
      data,         // The new data to set
      { new: true, upsert: true } // Options: return the updated document and create if not found
    ).exec(); // Ensure to return a promise
  }

  async findAll() {
    return this.supportModel.find().exec();
  }
}
