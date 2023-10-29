import { Injectable } from "@nestjs/common";
import { Pedido } from "../../domain/pedido";
import { PedidoPersistencePort } from "../../application/ports/out/pedido-persistente.port";
import { PedidoMapper } from "./pedido.mapper";

@Injectable()
export class PedidoPersistenceAdapter implements PedidoPersistencePort {
    constructor(private pedidoMapper: PedidoMapper) {}
    
    async persistPedido(pedido: Pedido) {
     console.log('request-PedidoPersistenceAdapter:', pedido);
        return this.pedidoMapper.createPedido(pedido)
    }

    async getAllPedido(): Promise<Pedido[]> {
        return await this.pedidoMapper.getAllPedido()

    }

}