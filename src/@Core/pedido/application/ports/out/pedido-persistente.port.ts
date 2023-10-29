import { Pedido } from './../../../domain/pedido';

export abstract class PedidoPersistencePort {
    abstract persistPedido(pedido: Pedido): Promise<any>
    abstract getAllPedido(): Promise<Pedido[]>

} 