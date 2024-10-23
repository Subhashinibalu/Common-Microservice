// src/upload/upload.service.ts
import { Injectable } from '@nestjs/common';
import { writeFileSync, existsSync, mkdirSync, read, readFileSync } from 'fs';
import * as path from 'path';
import fs from 'fs';
@Injectable()
export class UploadService {
    async uploadFile(fileData: { originalname: string }) {
        const { originalname } = fileData;
        const uploadDir = path.join(__dirname, '..', '..', 'public');
       

        if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir);
        }

        const filePath = path.join(uploadDir, originalname);
        writeFileSync(filePath, Buffer.from(''));  // This will be your uploaded file buffer
const buffer = Buffer.from(filePath);
const fileinfo =readFileSync(filePath);

const blob = new Blob([buffer])
console.log(blob)
const url = URL.createObjectURL(blob);

console.log(url);
        return { message: 'File processed successfully', url };
    }
}
