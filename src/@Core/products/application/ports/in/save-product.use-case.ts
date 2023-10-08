import { Product } from "src/@Core/products/domain/Products";
import { SaveProductCommand } from "./save-product.command";

export abstract class SaveProductUseCase {
    abstract saveProduct(command: SaveProductCommand): Promise<void>
    abstract getAllProducts(): Promise<Product[]>

}