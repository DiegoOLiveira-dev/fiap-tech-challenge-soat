import { Module, forwardRef } from '@nestjs/common';
import { ProductsModule } from './@Core/products/products.module';
import { StatusPreparoModule } from './@Core/statuspreparo/statuspreparo.module';
import { ClientsModule } from './@Core/clients/clients.module';
import { PedidoModule } from './@Core/pedido/pedido.module';
import { PaymentModule } from './@Core/payment/payments.module';
import { CategoriesNewModule } from './@Core/categories/categories.module';

@Module({
  imports: [CategoriesNewModule,forwardRef(() => StatusPreparoModule), forwardRef(() => ProductsModule), forwardRef(() => PedidoModule), forwardRef(() => ClientsModule), forwardRef(() => PaymentModule)],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }
