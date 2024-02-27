import { Injectable } from "@nestjs/common";
import { ProductPersistencePort } from "../../base/interfaces/product-persistente.port";
import { Product } from "../entity/Products";

@Injectable()
export class GetProductUseCase  {
    constructor(private productPersistencePort: ProductPersistencePort) { }


    async getAllProducts(): Promise<Product[]> {

        return await this.productPersistencePort.getAllProducts()

    }

    
}