import { Injectable } from "@nestjs/common";
import { Category } from "../Category";
import { CategoryPersistencePort } from "../../base/interfaces/product-persistente.port";

@Injectable()
export class SaveCategoryService {
    constructor(private categoryPersistencePort: CategoryPersistencePort){}

    async saveCategory(command: any): Promise<void> {
        try {
            const category: Category = {
                description: command.description,
            };
            await this.categoryPersistencePort.persistCategory(category)
        } catch (error) {
            throw error;
        }

    }
}