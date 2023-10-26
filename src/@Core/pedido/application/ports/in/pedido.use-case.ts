import { Pedido } from './../../../domain/pedido';


export abstract class PedidoUseCase {
    //abstract saveCategory(command: SaveCategoryCommand): Promise<void>
    abstract getAllPedidos(): Promise<Pedido[]>

}