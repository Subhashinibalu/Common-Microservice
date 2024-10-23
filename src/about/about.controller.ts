/* eslint-disable prettier/prettier */
// src/about/about.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AboutService } from './about.service';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @MessagePattern({ cmd: 'create_about' })
  async create(@Payload() body: any) {
    return this.aboutService.create(body);
  }

  @MessagePattern({ cmd: 'find_all_about' })
  async findAll() {
    return this.aboutService.findAll();
  }
}
