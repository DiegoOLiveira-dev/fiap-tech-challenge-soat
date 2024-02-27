import { Injectable } from "@nestjs/common";
import { ProductPersistencePort } from "../../base/interfaces/product-persistente.port";
import { Product } from "../entity/Products";

@Injectable()
export class DeleteProductUseCase  {
    constructor(private productPersistencePort: ProductPersistencePort) { }

    async deleteProductById(id: number): Promise<Product> {
        return await this.productPersistencePort.deleteProductById(id)
    }

    
}