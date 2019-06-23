import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController], // controller 得被挂到一个module上
  providers: [AppService],
})
export class AppModule {}
