import { Injectable } from "@nestjs/common";
import { Pedido } from "../entity/pedido";
import { PedidoPersistencePort } from "../../base/interfaces/pedido-persistente.port";
import { SavePedidoCommand } from "../../base/interfaces/save-pedido.command";
import { GetSelectedProductUseCase } from "./get-selected-product.use-case";


@Injectable()
export class SavePedidoUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort, private getSelected: GetSelectedProductUseCase) { }

    async savePedido(command: SavePedidoCommand): Promise<void> {
        try {

            let total: number = 0;
            const promises = command.produtos.map(async (item) => {
                let produto: any = await this.getSelected.getSelectedProduct({ _id: item.produto })
                total = total + (produto[0]._doc.price * item.qtd)
            })

            await Promise.all(promises)


            const pedido: Pedido = {
                id_cliente: command.id_cliente,
                nome_cliente: command.nome_cliente,
                produtos: command.produtos,
                status_pedido: command.status_pedido,
                total: total
            };
            return await this.pedidoPersistencePort.persistPedido(pedido)
        } catch (error) {
            throw error;
        }
    }
    
}