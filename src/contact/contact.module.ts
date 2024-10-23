/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { Contact, ContactSchema } from './contact.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]), // Ensure this is included
  ],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService], // Ensure this is exported for use in other modules. This allows other modules to use this service.  // eslint-disable-next-line prettier/prettier
})
export class ContactModule {}
