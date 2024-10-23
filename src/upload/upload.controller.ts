// src/upload/upload.controller.ts (Microservice)
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UploadService } from './upload.service';

@Controller()
export class UploadController {
    constructor(private readonly uploadService: UploadService) {}

    @MessagePattern('upload_file')
    async handleFileUpload(fileData) {
        return this.uploadService.uploadFile(fileData);
    }
}
