import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('sum')
  sum(numArr: Array<number>): number {
    return numArr.reduce((total, item) => total + item, 0);
  }
}
