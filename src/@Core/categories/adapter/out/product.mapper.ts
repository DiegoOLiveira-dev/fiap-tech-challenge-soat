import { Injectable } from "@nestjs/common";
import { IDataServices } from "../../../abstracts/data-services.abstract";
import { Category } from "../../domain/Category";

@Injectable()
export class CategoryMapper {
  constructor(private dataServices: IDataServices) {}

  async createProduct(category: Category): Promise<Category> {
    const createdCategory = await this.dataServices.categories.create(category);

    return createdCategory;
  }

  async getAllCategories(): Promise<Category[]> {
    const allCategories = await this.dataServices.categories.getAll()
    return allCategories
  }
}
