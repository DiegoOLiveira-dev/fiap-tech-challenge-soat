import { Product } from 'src/@Core/products/domain/Products';
import { Pedido } from './../../../domain/pedido';

export abstract class PedidoPersistencePort {
    abstract persistPedido(pedido: Pedido): Promise<any>
    abstract getAllPedido(): Promise<Pedido[]>
    abstract getSelectedProduct(filter: any): Promise<Product[]>
    abstract updateStatus(body: any): Promise<any>


} 