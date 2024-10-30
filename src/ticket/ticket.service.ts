import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket, TicketDocument } from './ticket.schema';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket.name) private ticketModel: Model<TicketDocument>) {}

  async upsert(sessionId: string) {
    // Check if a ticket with the provided sessionId exists
    let ticket = await this.ticketModel.findOne({ sessionId }).exec();

    // If the ticket exists, return its ID
    if (ticket) {
      return ticket._id; // Return the existing ticket's ID
    }

    // If it does not exist, create a new ticket
    ticket = new this.ticketModel({ sessionId });
    await ticket.save();
    return ticket._id; // Return the new ticket's ID
  }
  async find(body: any): Promise<string | null> {
    const sessionId = body.from; 
    let ticket = await this.ticketModel.findOne({ sessionId }).exec();
    return ticket ? ticket._id.toString() : null; // Return as string
  }
}
