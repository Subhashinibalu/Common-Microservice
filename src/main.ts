import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const config =new ConfigService()
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.TCP,
    options: {
      host: config.get("HOST"),
      port:config.get("PORT"),
    },
  });
  console.log("running in port",process.env.PORT);
  await app.listen();
}

bootstrap();
