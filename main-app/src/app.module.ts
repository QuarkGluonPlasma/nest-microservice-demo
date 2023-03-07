import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices'; // 注册一个用于对微服务进行数据传输的客户端

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CALC_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 8888,
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'LOG_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 9999,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
