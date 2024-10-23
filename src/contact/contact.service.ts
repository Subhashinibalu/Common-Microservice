/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Contact, ContactDocument } from './contact.schema';

@Injectable()
export class ContactService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {}

 
  async upsert(body: any) {
    const { _id, ...data } = body; // Extract _id for upsert
  
    // If _id is not provided, create a new one
    if (!_id) {
      const newContact = new this.contactModel(data);
      return await newContact.save(); // Save new document
    }
  
    // Perform the update without including _id in data
    return await this.contactModel.findOneAndUpdate(
      { _id }, // Find by _id
      { ...data }, // Only include other fields for the update
      { new: true, upsert: true } // Options
    ).exec();
  }
  

  async findAll() {
    const contacts = await this.contactModel.find().exec();
    if (!contacts || contacts.length === 0) {
      throw new Error('No contact documents found');
    }
    return contacts;    
  }
}
