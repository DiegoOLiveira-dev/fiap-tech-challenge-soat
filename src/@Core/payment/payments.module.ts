import { Module } from '@nestjs/common';
import { AdapterModule } from './adapter/adapter.module';
import { PaymentApplicationModule } from './core/core.module';

@Module({
  imports: [AdapterModule, PaymentApplicationModule],

})
export class PaymentModule {}