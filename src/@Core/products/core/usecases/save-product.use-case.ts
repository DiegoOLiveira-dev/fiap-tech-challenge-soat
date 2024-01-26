import { Injectable } from "@nestjs/common";
import { ProductPersistencePort } from "../../base/interfaces/product-persistente.port";
import { Product } from "../entity/Products";
import { SaveProductCommand } from "../../base/interfaces/product.command";

@Injectable()
export class SaveProductUseCase  {
    constructor(private productPersistencePort: ProductPersistencePort) { }

    async saveProduct(command: SaveProductCommand): Promise<void> {
        try {
            const product: Product = {
                name: command.name,
                description: command.description,
                category: command.category,
                image_url: command.image_url,
                price: command.price,
            };
            await this.productPersistencePort.persistProduct(product)
        } catch (error) {
            throw error;
        }

    }
    
}