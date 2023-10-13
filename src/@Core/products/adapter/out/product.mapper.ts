import { HttpException, Injectable } from "@nestjs/common";
import { Product } from "../../domain/Products";
import { IDataServices } from "src/@Core/abstracts/data-services.abstract";

@Injectable()
export class ProductMapper {
  constructor(private dataServices: IDataServices) {}

  async createProduct(product: Product): Promise<Product> {

    try {
      const createdBook = await this.dataServices.products.create(product);
      return createdBook;
    } catch (error) {
      throw new HttpException(error.errmsg, 400)

    }

  }

  async getAllProducts(): Promise<Product[]> {
    const allProducts = await this.dataServices.products.getAll()
    return allProducts
  }
}
