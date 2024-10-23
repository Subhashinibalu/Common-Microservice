/* eslint-disable prettier/prettier */
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @MessagePattern({ cmd: 'upsert_contact' })
  async upsert(@Payload() body: any) {
    return this.contactService.upsert(body);
  }

  @MessagePattern({ cmd: 'find_all_contacts' })
  async findAll() {
    return this.contactService.findAll();
  }
}
