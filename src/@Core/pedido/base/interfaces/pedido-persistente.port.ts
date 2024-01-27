import { Product } from 'src/@Core/products/core/entity/Products';
import { Pedido } from '../../core/entity/pedido';

export abstract class PedidoPersistencePort {
    abstract persistPedido(pedido: Pedido): Promise<any>
    abstract getAllPedido(): Promise<Pedido[]>
    abstract getSelectedProduct(filter: any): Promise<Product[]>
    abstract updateStatus(body: any): Promise<any>
    abstract getSelectedOrder(filter: any): Promise<Pedido[]>


} 