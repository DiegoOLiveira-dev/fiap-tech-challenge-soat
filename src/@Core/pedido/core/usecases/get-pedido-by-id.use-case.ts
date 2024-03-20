import { Injectable } from "@nestjs/common";
import { Pedido } from "../entity/pedido";
import { PedidoPersistencePort } from "../../base/interfaces/pedido-persistente.port";


@Injectable()
export class GetPedidoByIdUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort) { }
    

    async getSelectedOrder(filter: any): Promise<Pedido[]> {
        try {

            return await this.pedidoPersistencePort.getSelectedOrder(filter)

        } catch (err) {
            console.log(err)
        }

    }

    
}