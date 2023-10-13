import { Product } from "src/@Core/products/domain/Products";

export abstract class ProductPersistencePort {
    abstract persistProduct(product: Product): Promise<any>
    abstract getAllProducts(): Promise<Product[]>

} 