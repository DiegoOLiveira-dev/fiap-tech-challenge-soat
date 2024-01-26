import { Module } from '@nestjs/common';
import { AdapterModule } from './adapter/adapter.module';
import { ApplicationModule } from './core/core.module';

@Module({
  imports: [AdapterModule, ApplicationModule],

})
export class PaymentModule {}