import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Home, HomeDocument } from './home.schema';

@Injectable()
export class HomeService {
  constructor(@InjectModel(Home.name) private homeModel: Model<HomeDocument>) {}

  async create(body: any) {
    const { _id, ...data } = body; // Extract `_id` and the rest of the data
    // console.log(data);
    
    return this.homeModel.findOneAndUpdate(
      { _id }, // The condition to find the existing document
      { $set: data }, // Only update the fields provided in `data`
      { new: true, upsert: true } // Options: return the updated document and create if not found
    ).exec(); // Ensure to return a promise
  }


  
  async findAll() {
    return await this.homeModel.find().exec();
  }
}
