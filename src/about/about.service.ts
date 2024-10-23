/* eslint-disable prettier/prettier */
// src/about/about.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose'; // Import Types
import { About, AboutDocument } from './about.schema';

@Injectable()
export class AboutService {
  constructor(@InjectModel(About.name) private aboutModel: Model<AboutDocument>) {}

  async create(body: any) {
    let { _id, ...data } = body; // Extract _id for upsert

    // // If _id is null or not provided, generate a new ObjectId
    // if (_id == null) {
    //   _id = new Types.ObjectId(); // Generate a new ObjectId
    // }

    return this.aboutModel.findOneAndUpdate(
      { _id }, // Find by _id
      {$set:data}, // Data to update or insert
      { new: true, upsert: true } // Options
    ).exec(); // Return the promise
  }

  async findAll() {
    const about = await this.aboutModel.find().exec();
    if (!about || about.length === 0) {
      throw new Error('No about documents found');
    }
    return about;    
  }
}
