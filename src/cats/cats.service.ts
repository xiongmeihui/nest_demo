import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

/**
 * service层 负责对用户的增删改查
 */
@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
