import { Product } from '../../@Core/products/domain/Products';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract products: IGenericRepository<Product>;

}