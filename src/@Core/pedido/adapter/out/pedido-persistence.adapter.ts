import { Injectable } from "@nestjs/common";
import { Pedido } from "../../domain/pedido";
import { PedidoPersistencePort } from "../../application/ports/out/pedido-persistente.port";
import { PedidoMapper } from "./pedido.mapper";

@Injectable()
export class PedidoPersistenceAdapter implements PedidoPersistencePort {
    constructor(private productMapper: PedidoMapper) {}

    async getAllPedido(): Promise<Pedido[]> {
        return await this.productMapper.getAllPedido()

    }

}