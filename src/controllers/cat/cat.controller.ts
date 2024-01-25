import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateOneBody } from './dtos/create-one.dto';

@Controller('/cat')
export class CatController {
  @Post()
  createOne(@Body() body: CreateOneBody) {
    console.log(body);
    return 'ok';
  }
}
