import { Product } from "src/@Core/products/domain/Products";
import { SaveProductCommand } from "./product.command";

export abstract class SaveProductUseCase {
    abstract saveProduct(command: SaveProductCommand): Promise<void>
    abstract getAllProducts(): Promise<Product[]>
    abstract getProductsByCategory(id?: number): Promise<Product[]>
    abstract deleteProductById(id: number): Promise<Product>
    abstract updateProductById(id: number, command: SaveProductCommand): Promise<Product>
}