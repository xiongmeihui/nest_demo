import { Get, Body, Controller, Post, Req, Param } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

/*
* 在 MVC 设计模式中， Controller 只负责对请求的分发，
* 并不处理实际的业务逻辑
*/
@Controller('cats') // 路由信息
export class CatsController {
  // ts 语法 参数属性
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  // @Get(':id') // 规定该handler是处理该路由下的get请求
  // findAll(@Req() request: Request, @Param() params): string {
  //   return `This action returns a ${params.id} cat`;
  // }
  // @Post() // 规定该handler是处理该路由下的post请求
  // @Header('Cache-Control', 'none')
  // find(): string {
  //   return 'this action posts cats!';
  // }
  // @Post()
  // async create(@Body() createCatDto: CreateCatDto) {
  //   return 'This action adds a new cat';
  // }
}
