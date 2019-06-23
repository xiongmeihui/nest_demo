import {
  Get,
  Body,
  Controller,
  Post,
  Req,
  Header,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats') // 路由信息
export class CatsController {
  @Get(':id') // 规定该handler是处理该路由下的get请求
  findAll(@Req() request: Request, @Param() params): string {
    return `This action returns a ${params.id} cat`;
  }
  // @Post() // 规定该handler是处理该路由下的post请求
  // @Header('Cache-Control', 'none')
  // find(): string {
  //   return 'this action posts cats!';
  // }
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
