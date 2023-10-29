
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../../../abstracts/data-services.abstract';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  Product,
  ProductDocument,
} from './model/product-entity';
import { Category, CategoryDocument } from './model/category-entity';

import { Pedido, PedidoDocument } from './model/pedido-entity';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap {
  products: MongoGenericRepository<Product>;
  categories: MongoGenericRepository<Category>;
  pedido: MongoGenericRepository<Pedido>;


  constructor(
    @InjectModel(Product.name)
    private ProductRepository: Model<ProductDocument>,
    @InjectModel(Category.name)
    private CategoryRepository: Model<CategoryDocument>,
    @InjectModel(Pedido.name)
    private PedidoRepository: Model<PedidoDocument>
  ) {
  }

  onApplicationBootstrap() {
    this.products = new MongoGenericRepository<Product>(this.ProductRepository, ['category']);
    this.categories = new MongoGenericRepository<Category>(this.CategoryRepository);
    this.pedido = new MongoGenericRepository<Pedido>(this.PedidoRepository, ['produtos']);
  }
}