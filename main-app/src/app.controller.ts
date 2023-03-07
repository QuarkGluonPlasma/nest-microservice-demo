import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('CALC_SERVICE') private calcClient: ClientProxy,
    @Inject('LOG_SERVICE') private logClient: ClientProxy,
  ) {}

  @Get()
  calc(@Query('num') str): Observable<number> {
    const numArr = str.split(',').map((item) => parseInt(item));

    this.logClient.emit('log', 'calc:' + numArr);

    return this.calcClient.send('sum', numArr);
  }
}
