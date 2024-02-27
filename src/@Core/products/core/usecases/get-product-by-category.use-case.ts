import { Injectable } from "@nestjs/common";
import { ProductPersistencePort } from "../../base/interfaces/product-persistente.port";
import { Product } from "../entity/Products";

@Injectable()
export class GetProductCategoryUseCase {
    constructor(private productPersistencePort: ProductPersistencePort) { }

    async getProductsByCategory(id?: number): Promise<Product[]> {
        const filter = { category: id }
        return await this.productPersistencePort.getProductsByCategory(filter)
    }

    
}