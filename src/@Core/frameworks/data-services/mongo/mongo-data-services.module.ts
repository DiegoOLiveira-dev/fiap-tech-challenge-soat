
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from '../../../abstracts/data-services.abstract';
import {
  Product,
  ProductSchema,
} from '../mongo/model/product-entity';
import { MongoDataServices } from './mongo-data-services.service';
import { Category, CategorySchema } from './model/category-entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Category.name, schema: CategorySchema },

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