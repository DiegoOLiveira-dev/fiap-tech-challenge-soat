import { ApiTags } from '@nestjs/swagger';
import { Controller, Post } from '@nestjs/common';
import { IDataServices } from './@Core/abstracts';

export class AppController {
  constructor(private dataServices: IDataServices) { }

}
