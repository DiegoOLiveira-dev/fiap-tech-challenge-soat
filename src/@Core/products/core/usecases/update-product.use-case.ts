import { Injectable } from "@nestjs/common";
import { ProductPersistencePort } from "../../base/interfaces/product-persistente.port";
import { Product } from "../entity/Products";
import { SaveProductCommand } from "../../base/interfaces/product.command";

@Injectable()
export class UpdateProductUseCase  {
    constructor(private productPersistencePort: ProductPersistencePort) { }


    async updateProductById(id: number, command: SaveProductCommand): Promise<Product> {
        return await this.productPersistencePort.updateProductById(id, command)
    }

    
}