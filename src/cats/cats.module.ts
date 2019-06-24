import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController], // controller 得被挂到一个module上
  providers: [CatsService], // 将被 nest injector 实例化 且被整个模块共用
  // 该 module 中 providers 的子集，用来分享该单例给其他模块使用
  // 所有引入当前模块的模块都能访问 CatsService 的单例
  exports: [CatsService],
})
export class CatsModule {}
