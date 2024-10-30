import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @MessagePattern({ cmd: 'upsert_ticket' })
  async upsert(@Payload() body: { sessionId: string }) {
    return this.ticketService.upsert(body.sessionId); 
  }

  @MessagePattern({ cmd: 'find_ticket' })
  async find(@Payload() body: any) {
    return this.ticketService.find(body); 
  }

  // @MessagePattern({ cmd: 'find_all_tickets' })
  // async findAll() {
  //   return this.ticketService.findAll();
  // }
}
