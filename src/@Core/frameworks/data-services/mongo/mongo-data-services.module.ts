
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../abstracts/data-services.abstract';
import {
  Product,
  ProductSchema,
} from '../mongo/model/product-entity';
import { MongoDataServices } from './mongo-data-services.service';
import { Category, CategorySchema } from './model/category-entity';
import { Pedido, PedidoSchema} from './model/pedido-entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Pedido.name, schema: PedidoSchema },

    ]),
    MongooseModule.forRoot('mongodb://admin:pass@mongo-dev:27017', {dbName: 'fiap'}),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}