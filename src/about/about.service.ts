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
    let { _id, ...data } = body; 


    return this.aboutModel.findOneAndUpdate(
      { _id }, 
      {$set:data},
      { new: true, upsert: true } 
    ).exec(); 
  }

  async findAll() {
    const about = await this.aboutModel.find().exec();
    if (!about || about.length === 0) {
      throw new Error('No about documents found');
    }
    return about;    
  }
}
