import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @MessagePattern('create_home') // Pattern to listen for create messages
  async create(@Payload() body: any) {
    return this.homeService.create(body);
  }

  @MessagePattern('find_all_homes') // Pattern to listen for find all messages
  async findAll() {
    return this.homeService.findAll();
  }

 
}
