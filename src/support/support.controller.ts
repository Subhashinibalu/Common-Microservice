import { MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { SupportService } from './support.service';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @MessagePattern('create_support')
  async create(@Payload() body: any) {
    return this.supportService.create(body);
  }

  @MessagePattern('find_all_support')
  async findAll() {
    return this.supportService.findAll();
  }
}


