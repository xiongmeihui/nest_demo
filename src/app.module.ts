import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';

/**
 * 模块最好按组件划分
 */
@Module({
  imports: [CatsModule], // 引入模块的列表，这些模块输出了该模块中使用的部分provider
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 为路由为 cats, 且 http 方法为Get 的处理器应用中间件
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'cats', method: RequestMethod.POST })
      .forRoutes(CatsController);
  }
}
