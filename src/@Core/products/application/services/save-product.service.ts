import { Injectable } from "@nestjs/common";
import { SaveProductUseCase } from "../ports/in/save-product.use-case";
import { ProductPersistencePort } from "../ports/out/product-persistente.port";
import { Product } from "../../domain/Products";
import { SaveProductCommand } from "../ports/in/save-product.command";

@Injectable()
export class SaveProductService implements SaveProductUseCase {
    constructor(private productPersistencePort: ProductPersistencePort){}

    async saveProduct(command: SaveProductCommand): Promise<void> {
        try {
            const product: Product = {
                name: command.name,
                description: command.description,
                id_category: command.id_category,
                image_url: command.image_url,
                price: command.price
            };
            await this.productPersistencePort.persistProduct(product)
        } catch (error) {
            throw error;
        }

    }

    async getAllProducts(): Promise<Product[]> {
        
       return await this.productPersistencePort.getAllProducts()

    }
}