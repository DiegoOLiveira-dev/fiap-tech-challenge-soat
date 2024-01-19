import { Injectable } from "@nestjs/common";
import { StatusPreparoPersistencePort } from "../../application/ports/out/statuspreparo-persistente.port";
import { StatusPreparo } from "../../domain/StatusPreparo";
import { StatusPreparoMapper } from './statuspreparo.mapper';

@Injectable()
export class StatusPreparoPersistenceAdapter implements StatusPreparoPersistencePort {
    constructor(private StatusPreparoMapper: StatusPreparoMapper) { }

    //     async persistProduct(product: Product) {
    //         return this.productMapper.createProduct(product)
    //     }

    async getAllStatusPreparo(): Promise<StatusPreparo[]> {
        return await this.StatusPreparoMapper.getAllStatusPreparos()

    }

    //     async getProductsByCategory(filter: Record<string, any>): Promise<Product[]> {
    //         return await this.productMapper.getProductsByCategory(filter)
    //     }

    //     async deleteProductById(id: number): Promise<Product> {
    //         return await this.productMapper.deleteProductByID(id)
    //     }

    //     async updateProductById(id: number, product: Product): Promise<Product> {
    //         return await this.productMapper.updateProductByID(id, product)
    //     }

}