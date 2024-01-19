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

            const pedido: Pedido = {
                id_status: command.id_status,
                descricao_status: command.descricao_status,
                id_cliente: command.id_cliente,
                nome_cliente: command.nome_cliente,
                produtos: command.produtos,
                total: command.total,
                test: command.test
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