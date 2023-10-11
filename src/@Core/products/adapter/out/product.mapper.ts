import { Injectable } from "@nestjs/common";
import { Product } from "../../domain/Products";
import { IDataServices } from "src/@Core/abstracts/data-services.abstract";

@Injectable()
export class ProductMapper {
  constructor(private dataServices: IDataServices) {}

  async createProduct(product: Product): Promise<Product> {
    const createdBook = await this.dataServices.products.create(product);

    return createdBook;
  }

  async getAllProducts(): Promise<Product[]> {
    const allProducts = await this.dataServices.products.getAll()
    return allProducts
  }
}
