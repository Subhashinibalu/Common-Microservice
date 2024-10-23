// src/navbar/navbar.microservice.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { NavbarService } from './navbar.service';

@Controller()
export class NavbarController {
    constructor(private readonly navbarService: NavbarService) {}

    @MessagePattern('create_navbar') // Pattern to listen for create messages
    async create(@Payload() body: any) {
        return this.navbarService.create(body);
    }

    @MessagePattern('find_all_navbars') // Pattern to listen for find all messages
    async findAll() {
        return this.navbarService.findAll();
    }

    // Add more methods for update, delete, etc.
}
