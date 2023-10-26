import { Pedido } from './../../../domain/pedido';

export abstract class PedidoPersistencePort {
    abstract getAllPedido(): Promise<Pedido[]>

} 