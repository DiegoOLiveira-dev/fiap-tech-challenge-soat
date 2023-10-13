import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { IDataServices } from "../../../abstracts/data-services.abstract";
import { Category } from "../../domain/Category";

@Injectable()
export class CategoryMapper {
  constructor(private dataServices: IDataServices) {}

  async createProduct(category: Category): Promise<any> {

    try {
      const createdCategory = await this.dataServices.categories.create(category);
      return createdCategory;
    } catch (error) {
      throw new HttpException(error.errmsg, 400)
    }
    
  }

  async getAllCategories(): Promise<Category[]> {
    const allCategories = await this.dataServices.categories.getAll()
    return allCategories
  }
}
