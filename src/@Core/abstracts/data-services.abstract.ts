import { Product } from '../products/core/entity/Products';
import { Category } from '../categories/core/Category';
import { Client } from '../clients/core/entity/Client';
import { Payment } from '../payment/core/entity/Payment';
import { StatusPreparo } from '../statuspreparo/core/entity/StatusPreparo';
import { Pedido } from '../pedido/core/entity/pedido';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract products: IGenericRepository<Product>;
  abstract categories: IGenericRepository<Category>;
  abstract clients: IGenericRepository<Client>;
  abstract pedido: IGenericRepository<Pedido>;
  abstract payment: IGenericRepository<Payment>;
  abstract statuspreparo: IGenericRepository<StatusPreparo>;
}