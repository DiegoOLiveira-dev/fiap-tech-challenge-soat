import { Module, forwardRef } from '@nestjs/common';
import { ProductsModule } from './@Core/products/products.module';
import { CategoriesModule } from './@Core/categories/categories.module';
import { ClientsModule } from './@Core/clients/clients.module';
import { PedidoModule } from './@Core/pedido/pedido.module';

@Module({
  imports: [forwardRef(() => ProductsModule),forwardRef(() => CategoriesModule), forwardRef(() =>  PedidoModule), forwardRef(() => ClientsModule)],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
