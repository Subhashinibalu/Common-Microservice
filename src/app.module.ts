import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutController } from './about/about.controller';
import { AboutModule } from './about/about.module';
import { HomeController } from './home/home.controller';
import { HomeModule } from './home/home.module';
import { SupportController } from './support/support.controller';
import { SupportModule } from './support/support.module';
import { ContactController } from './contact/contact.controller';
import { ContactModule } from './contact/contact.module';
import { NavbarController } from './navbar/navbar.controller';
import { NavbarModule } from './navbar/navbar.module';
import { FooterController } from './footer/footer.controller';
import { FooterModule } from './footer/footer.module';
import { UploadController } from './upload/upload.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';
import { ChatModule } from './chat/chat.module';
import { ChatController } from './chat/chat.controller';


@Module({
  imports: [  ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get("DATABASE_URL"),
        };
      },
      inject: [ConfigService],
    }), AboutModule, HomeModule, SupportModule, ContactModule, NavbarModule, FooterModule,UploadModule, ChatModule],
  controllers: [AppController, AboutController, HomeController, SupportController, ContactController, NavbarController, FooterController, UploadController,ChatController],
  providers: [AppService],
})
export class AppModule {}
