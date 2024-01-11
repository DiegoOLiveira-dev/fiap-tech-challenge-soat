
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../abstracts/data-services.abstract';
import {
  Product,
  ProductSchema,
} from '../mongo/model/product-entity';
import { MongoDataServices } from './mongo-data-services.service';
import { Category, CategorySchema } from './model/category-entity';
import { Client, ClientSchema } from './model/client-entity';
import { Pedido, PedidoSchema } from './model/pedido-entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Client.name, schema: ClientSchema },
      { name: Pedido.name, schema: PedidoSchema },

    ]),
    MongooseModule.forRoot(process.env.MONGO_URL, { dbName: 'fiap' }),
    //MongooseModule.forRoot('mongodb://admin:pass@mongo-dev:27017', { dbName: 'fiap' }),
    //MongooseModule.forRoot('mongodb://admin:pass@localhost:27017', { dbName: 'fiap' }),

  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule { }