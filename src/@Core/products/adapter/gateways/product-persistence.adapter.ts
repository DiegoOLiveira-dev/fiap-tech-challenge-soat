import { HttpException, Injectable } from "@nestjs/common";
import { ProductPersistencePort } from "../../base/interfaces/product-persistente.port";
import { Product } from "../../core/entity/Products";
import { IDataServices } from "src/@Core/abstracts";

@Injectable()
export class ProductPersistenceAdapter implements ProductPersistencePort {
    constructor(private dataServices: IDataServices) {}

    async persistProduct(product: Product) {
        try {
            const createdBook = await this.dataServices.products.create(product);
            return createdBook;
          } catch (error) {
            throw new HttpException(error.errmsg, 400)
      
          }    }

    async getAllProducts(): Promise<Product[]> {
        const allProducts = await this.dataServices.products.getAll()
        return allProducts
    }

    async getProductsByCategory(filter: Record<string, any>): Promise<Product[]> {
        const productsByCayegory = await this.dataServices.products.getByFilter(filter)
        return productsByCayegory    }

    async deleteProductById(id: number): Promise<Product> {
        const deletedProduct = await this.dataServices.products.deleteById(id)
        return deletedProduct    }

    async updateProductById(id: number, product: Product): Promise<Product> {
        const updatedProduct = await this.dataServices.products.updateById(id, product)
        return updatedProduct    }

}
