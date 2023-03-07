import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @EventPattern('log')
  wordCountLog(text: string): void {
    console.log(text);
  }
}
