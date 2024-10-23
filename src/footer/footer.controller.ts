// src/footer/footer.microservice.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FooterService } from './footer.service';

@Controller()
export class FooterController {
    constructor(private readonly footerService: FooterService) {}

    @MessagePattern('create_footer') // Listen for 'create_footer' messages
    async create(@Payload() body: any) {
        return this.footerService.create(body);
    }

    @MessagePattern('find_all_footers') // Listen for 'find_all_footers' messages
    async findAll() {
        return this.footerService.findAll();
    }

    // Add more methods for update, delete, etc.
}
