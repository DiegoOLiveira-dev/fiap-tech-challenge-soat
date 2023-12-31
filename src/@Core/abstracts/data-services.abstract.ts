import { Product } from '../../@Core/products/domain/Products';
import { Category } from '../categories/domain/Category';
import { Client } from '../clients/domain/Client';
import { Pedido } from '../pedido/domain/pedido';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract products: IGenericRepository<Product>;
  abstract categories: IGenericRepository<Category>;
  abstract clients: IGenericRepository<Client>;
  abstract pedido: IGenericRepository<Pedido>;
}