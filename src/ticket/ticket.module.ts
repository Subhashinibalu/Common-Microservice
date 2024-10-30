import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Ticket, TicketSchema } from './ticket.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ticket.name, schema:TicketSchema}]), // Ensure this is included
  ],
  controllers: [TicketController],
  providers: [TicketService],
  exports:[TicketService]
})
export class TicketModule {}
