import { Injectable } from "@nestjs/common";
import { SaveProductUseCase } from "../ports/in/product.use-case";
import { ProductPersistencePort } from "../ports/out/product-persistente.port";
import { Product } from "../../domain/Products";
import { SaveProductCommand } from "../ports/in/product.command";

@Injectable()
export class SaveProductService implements SaveProductUseCase {
    constructor(private productPersistencePort: ProductPersistencePort) { }

    async saveProduct(command: SaveProductCommand): Promise<void> {
        try {
            const product: Product = {
                name: command.name,
                description: command.description,
                category: command.category,
                image_url: command.image_url,
                price: command.price,
                qtde: command.qtde
            };
            await this.productPersistencePort.persistProduct(product)
        } catch (error) {
            throw error;
        }

    }

    async getAllProducts(): Promise<Product[]> {

        return await this.productPersistencePort.getAllProducts()

    }

    async getProductsByCategory(id?: number): Promise<Product[]> {
        const filter = { category: id }
        return await this.productPersistencePort.getProductsByCategory(filter)
    }

    async deleteProductById(id: number): Promise<Product> {
        return await this.productPersistencePort.deleteProductById(id)
    }

    async updateProductById(id: number, command: SaveProductCommand): Promise<Product> {
        return await this.productPersistencePort.updateProductById(id, command)
    }
}