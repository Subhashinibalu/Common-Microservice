/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Contact, ContactDocument } from './contact.schema';

@Injectable()
export class ContactService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {} 
  async upsert(body: any) {
    const { _id, ...data } = body;
  
  
    if (!_id) {
      const newContact = new this.contactModel(data);
      return await newContact.save(); 
    }
  
    return await this.contactModel.findOneAndUpdate(
      { _id }, 
      { ...data }, 
      { new: true, upsert: true } 
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