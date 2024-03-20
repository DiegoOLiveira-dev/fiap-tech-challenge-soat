import { HttpException, Injectable } from "@nestjs/common";
import { Category } from "../../core/Category";
import { CategoryPersistencePort } from "../../base/interfaces/product-persistente.port";
import { IDataServices } from "../../../abstracts";

@Injectable()
export class CategoryPersistenceAdapter implements CategoryPersistencePort {
    constructor(private dataServices: IDataServices) {}

    async persistCategory(category): Promise<Category> {
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


