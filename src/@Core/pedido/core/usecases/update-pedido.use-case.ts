import { HttpException, Injectable } from "@nestjs/common";
import { PedidoPersistencePort } from "../../base/interfaces/pedido-persistente.port";
import { SelectedStatusPedido } from "src/@Core/frameworks/data-services/mongo/model/selected";


@Injectable()
export class UpdatePedidoUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort) { }
    
    async updateStatusPedido(body: any): Promise<any> {

        try {

            const pedido = await this.pedidoPersistencePort.getSelectedOrder({_id: body.id_pedido })

            const statusExists = pedido[0].status_pedido.some((item: any) => item.status.id === body.newStatus.status);

            if (statusExists) {
                throw new HttpException("Status invalido para situacao do pedido", 400)
            }

            return await this.pedidoPersistencePort.updateStatus(body)
        } catch (err) {
            throw err
        }
    }
    
}