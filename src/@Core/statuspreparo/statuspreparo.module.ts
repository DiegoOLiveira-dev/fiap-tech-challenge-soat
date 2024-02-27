import { Module } from '@nestjs/common';
import { AdapterModule } from './adapter/adapter.module';
import { ApplicationModule } from './core/application.module';

@Module({
  imports: [AdapterModule, ApplicationModule],

})
export class StatusPreparoModule { }