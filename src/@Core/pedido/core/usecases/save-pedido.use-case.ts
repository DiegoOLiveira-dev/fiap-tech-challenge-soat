import { Injectable } from "@nestjs/common";
import { Pedido } from "../entity/pedido";
import { PedidoPersistencePort } from "../../base/interfaces/pedido-persistente.port";
import { SavePedidoCommand } from "../../base/interfaces/save-pedido.command";
import { GetSelectedProductUseCase } from "./get-selected-product.use-case";
import { SavePaymentUseCase } from "../../../payment/core/usecases/save-payment.use-case";


@Injectable()
export class SavePedidoUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort, private getSelected: GetSelectedProductUseCase, private savePaymentUseCase: SavePaymentUseCase) { }

    async savePedido(command: SavePedidoCommand): Promise<any> {
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
                date_order: command.date_order,
                total: total
            };
            
            const pedido_created = await this.pedidoPersistencePort.persistPedido(pedido)
            const ordem_pagamento = await this.savePaymentUseCase.savePayment({id_client: command.id_cliente, id_order: pedido_created._id, status_payment: 'false'})

            return pedido_created
        } catch (error) {
            throw error;
        }
    }
    
}