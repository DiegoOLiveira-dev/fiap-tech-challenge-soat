import { Injectable } from "@nestjs/common";
import { Category } from "../../domain/Category";
import { CategoryPersistencePort } from "../../application/ports/out/product-persistente.port";
import { CategoryMapper } from "./product.mapper";

@Injectable()
export class CategoryPersistenceAdapter implements CategoryPersistencePort {
    constructor(private productMapper: CategoryMapper) {}

    async persistCategory(product: Category) {
        this.productMapper.createProduct(product)
    }

    async getAllCategories(): Promise<Category[]> {
        return await this.productMapper.getAllCategories()

    }

}