import { Product } from 'src/@Core/products/domain/Products';
import { Pedido } from './../../../domain/pedido';
import { SavePedidoCommand } from './save-pedido.command';


export abstract class PedidoUseCase {
    abstract savePedido(command: SavePedidoCommand): Promise<any>
    abstract getAllPedidos(): Promise<Pedido[]>
    abstract getSelectedProduct(filter: any): Promise<Product[]>
    abstract updateStatusPedido(body: any): Promise<any>

}