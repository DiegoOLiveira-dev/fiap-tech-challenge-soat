import { Get } from '@nestjs/common';
import { IDataServices } from './@Core/abstracts';


export class AppController {
  constructor(private dataServices: IDataServices) { }

  @Get()
  getHello() {
    return "Hello World!";
  }
}
