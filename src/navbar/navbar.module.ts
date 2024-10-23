// src/navbar/navbar.module.ts
import { Module } from '@nestjs/common';
import { NavbarService } from './navbar.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Navbar, NavbarSchema } from './navbar.schema';
import { NavbarController } from './navbar.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Navbar.name, schema: NavbarSchema }]),
  ],
  controllers: [NavbarController],
  providers: [NavbarService],
  exports:[NavbarService]
})
export class NavbarModule {}
