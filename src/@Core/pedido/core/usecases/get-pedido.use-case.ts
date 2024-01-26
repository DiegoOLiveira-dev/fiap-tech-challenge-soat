import { Injectable } from "@nestjs/common";
import { Pedido } from "../entity/pedido";
import { PedidoPersistencePort } from "../../base/interfaces/pedido-persistente.port";


@Injectable()
export class GetPedidoUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort) { }
    

    async getAllPedidos(): Promise<Pedido[]> {

        return await this.pedidoPersistencePort.getAllPedido()

    }

    
}