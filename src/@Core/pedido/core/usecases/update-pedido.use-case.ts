import { Injectable } from "@nestjs/common";
import { PedidoPersistencePort } from "../../base/interfaces/pedido-persistente.port";


@Injectable()
export class UpdatePedidoUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort) { }
    
    async updateStatusPedido(body: any): Promise<any> {

        try {
            
            return await this.pedidoPersistencePort.updateStatus(body)
        } catch (err) {
            console.log(err)
        }
    }
    
}