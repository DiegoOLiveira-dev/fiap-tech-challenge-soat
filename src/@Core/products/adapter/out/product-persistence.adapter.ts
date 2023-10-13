import { Injectable } from "@nestjs/common";
import { ProductPersistencePort } from "../../application/ports/out/product-persistente.port";
import { Product } from "../../domain/Products";
import { ProductMapper } from './product.mapper';

@Injectable()
export class ProductPersistenceAdapter implements ProductPersistencePort {
    constructor(private productMapper: ProductMapper) {}

    async persistProduct(product: Product) {
        return this.productMapper.createProduct(product)
    }

    async getAllProducts(): Promise<Product[]> {
        return await this.productMapper.getAllProducts()

    }

}