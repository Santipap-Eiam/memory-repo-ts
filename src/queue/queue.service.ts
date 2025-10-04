import { Injectable, OnModuleInit } from '@nestjs/common';
import Memory from 'memory-sri';

@Injectable()
export class QueueService implements OnModuleInit {
  onModuleInit() {
    // Register the background processor
    Memory.process('test', function (
      data: { price: number; value: number },
      meta?: { id: string; name: string },
    ) {
      console.log('Running queued task with data:', data);
      console.log('Meta information:', meta);

      const plus = (x: number, y: number) => x + y;
      const c = plus(data.price, data.value);
    
      console.log(`total: ${c}`);
    });
  }
}
