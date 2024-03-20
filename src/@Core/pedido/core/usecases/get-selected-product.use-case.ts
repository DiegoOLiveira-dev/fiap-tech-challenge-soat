import { Injectable } from "@nestjs/common";
import { PedidoPersistencePort } from "../../base/interfaces/pedido-persistente.port";

import { Product } from "../../../products/core/entity/Products";

@Injectable()
export class GetSelectedProductUseCase {
    constructor(private pedidoPersistencePort: PedidoPersistencePort) { }
    

    async getSelectedProduct(filter: any): Promise<Product[]> {

        return await this.pedidoPersistencePort.getSelectedProduct(filter)

    }

    
}