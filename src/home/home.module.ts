import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';
import { Home, HomeSchema } from './home.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Home.name, schema: HomeSchema }]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
  exports: [HomeService], // Export HomeService if needed in other modules
})
export class HomeModule {}
