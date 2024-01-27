import { Injectable, Next } from "@nestjs/common";
import { Pedido } from "../../domain/pedido";
import { PedidoUseCase } from "../ports/in/pedido.use-case";
import { PedidoPersistencePort } from "../ports/out/pedido-persistente.port";
import { SavePedidoCommand } from "../ports/in/save-pedido.command";

import { Product } from "src/@Core/products/domain/Products";
import { map } from "rxjs";

@Injectable()
export class PedidoService implements PedidoUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort) { }
    async getSelectedProduct(filter: any): Promise<Product[]> {
        return await this.pedidoPersistencePort.getSelectedProduct(filter)
    }
    async getSelectedOrder(filter: any): Promise<Pedido[]> {
        try {

            return await this.pedidoPersistencePort.getSelectedOrder(filter)

        } catch (err) {
            console.log(err)
        }

    }

    async updateStatusPedido(body: any): Promise<any> {

        try {

            return await this.pedidoPersistencePort.updateStatus(body)
        } catch (err) {
            console.log(err)
        }
    }

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
                date_order: command.date_order,
                total: total
            };
            return await this.pedidoPersistencePort.persistPedido(pedido)
        } catch (error) {
            throw error;
        }
    }

    async getAllPedidos(): Promise<Pedido[]> {

        let mapAllPedidos = await this.pedidoPersistencePort.getAllPedido();

        // mapAllPedidos.map(async (item) => {
        //     item.status_pedido.forEach(item => {
        //         if (item.status.id_status == "5") {
        //             console.log("remove")
        //             delete item.status
        //             delete item.date
        //         }

        //     })

        // })
        return mapAllPedidos;

    }




}