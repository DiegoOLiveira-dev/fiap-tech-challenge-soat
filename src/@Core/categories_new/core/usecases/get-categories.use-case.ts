import { Injectable } from "@nestjs/common";
import { Category } from "../Category";
import { CategoryPersistencePort } from "../../base/interfaces/product-persistente.port";

@Injectable()
export class GetCategoryService {
    constructor(private categoryPersistencePort: CategoryPersistencePort){}

    async getAllCategories(): Promise<Category[]> {
        
       return await this.categoryPersistencePort.getAllCategories()

    }
}