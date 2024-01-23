import { Injectable } from "@nestjs/common";
import { Pedido } from "../../domain/pedido";
import { PedidoUseCase } from "../ports/in/pedido.use-case";
import { PedidoPersistencePort } from "../ports/out/pedido-persistente.port";
import { SavePedidoCommand } from "../ports/in/save-pedido.command";

import { Product } from "src/@Core/products/domain/Products";

@Injectable()
export class PedidoService implements PedidoUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort) { }

    async savePedido(command: SavePedidoCommand): Promise<void> {
        try {

            let total: number = 0;
            const promises = command.produtos.map(async (item) => {
                let produto: any = await this.getSelectedProduct({ _id: item.produto })
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

    async getAllPedidos(): Promise<Pedido[]> {

        return await this.pedidoPersistencePort.getAllPedido()

    }

    async getSelectedProduct(filter: any): Promise<Product[]> {

        return await this.pedidoPersistencePort.getSelectedProduct(filter)

    }
}