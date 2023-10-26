import { Injectable } from "@nestjs/common";
import { Pedido } from "../../domain/pedido";
import { PedidoUseCase } from "../ports/in/pedido.use-case";
import { PedidoPersistencePort } from "../ports/out/pedido-persistente.port";

@Injectable()
export class PedidoService implements PedidoUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort){}

    async getAllPedidos(): Promise<Pedido[]> {
        
       return await this.pedidoPersistencePort.getAllPedido()

    }
}