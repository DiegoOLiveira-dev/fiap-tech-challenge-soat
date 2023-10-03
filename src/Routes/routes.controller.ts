import { Controller, Get } from '@nestjs/common';

@Controller()
export class RoutesController {
  constructor() {}

  @Get()
  getHello(): string {
    return "";
  }
}
