
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

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  products: MongoGenericRepository<Product>;
  categories: MongoGenericRepository<Category>;


  constructor(
    @InjectModel(Product.name)
    private ProductRepository: Model<ProductDocument>,
    @InjectModel(Category.name)
    private CategoryRepository: Model<CategoryDocument>

  ) {
  }

  onApplicationBootstrap() {
    this.products = new MongoGenericRepository<Product>(this.ProductRepository, ['category']);
    this.categories = new MongoGenericRepository<Category>(this.CategoryRepository);
  }
}