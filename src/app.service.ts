import { Injectable } from '@nestjs/common';
import Memory from 'memory-sri';

@Injectable()
export class AppService {
  getHello(): string {
    Memory.addtask('test', { price: 50, value: 25 });
    return 'Hello World!';
  }
}