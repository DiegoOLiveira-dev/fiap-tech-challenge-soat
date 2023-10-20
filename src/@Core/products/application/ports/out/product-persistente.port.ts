import { Product } from "src/@Core/products/domain/Products";

export abstract class ProductPersistencePort {
    abstract persistProduct(product: Product): Promise<any>
    abstract getAllProducts(): Promise<Product[]>
    abstract getProductsByCategory(filter: Record<string, any>): Promise<Product[]>
    abstract deleteProductById(id: number): Promise<Product>
    abstract updateProductById(id:number, product: Product): Promise<Product>

} 