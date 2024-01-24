import { HttpException, Injectable } from "@nestjs/common";
import { IDataServices } from "../../../abstracts/data-services.abstract";
import { StatusPreparo } from "../../domain/StatusPreparo";


@Injectable()
export class StatusPreparoMapper {
  constructor(private dataServices: IDataServices) { }

  // async createProduct(product: Product): Promise<Product> {

  //   try {
  //     const createdBook = await this.dataServices.products.create(product);
  //     return createdBook;
  //   } catch (error) {
  //     throw new HttpException(error.errmsg, 400)

  //   }

  // }

  async getAllStatusPreparos(): Promise<StatusPreparo[]> {
    const allStatusPreparos = await this.dataServices.statuspreparo.getAll()
    return allStatusPreparos
  }

  // async getProductsByCategory(filter: Record<string, any>): Promise<Product[]> {
  //   const productsByCayegory = await this.dataServices.products.getByFilter(filter)
  //   return productsByCayegory
  // }

  // async deleteProductByID(id: number): Promise<Product> {
  //   const deletedProduct = await this.dataServices.products.deleteById(id)
  //   return deletedProduct
  // }

  // async updateProductByID(id: number, product: Product): Promise<Product> {
  //   const updatedProduct = await this.dataServices.products.updateById(id, product)
  //   return updatedProduct
  //}
}
