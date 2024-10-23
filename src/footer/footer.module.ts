// src/footer/footer.module.ts
import { Module } from '@nestjs/common';
import { FooterService } from './footer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Footer, FooterSchema } from './footer.schema';
import { FooterController } from './footer.controller';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Footer.name, schema: FooterSchema }]),
    ],
    controllers: [FooterController],
    providers: [FooterService],
    exports: [FooterService]
})
export class FooterModule {}
