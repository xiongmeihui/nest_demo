import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';

/**
 * 模块最好按组件划分
 */
@Module({
  imports: [CatsModule], // 引入模块的列表，这些模块输出了该模块中使用的部分provider
})
export class AppModule {}
