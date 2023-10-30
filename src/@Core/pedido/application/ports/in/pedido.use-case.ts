import { Pedido } from './../../../domain/pedido';
import { SavePedidoCommand } from './save-pedido.command';


export abstract class PedidoUseCase {
    abstract savePedido(command: SavePedidoCommand): Promise<any>
    abstract getAllPedidos(): Promise<Pedido[]>

}