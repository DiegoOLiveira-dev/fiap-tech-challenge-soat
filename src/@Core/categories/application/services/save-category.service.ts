import { Injectable } from "@nestjs/common";
import { Category } from "../../domain/Category";
import { CategoriesUseCase } from "../ports/in/categories.use-case";
import { CategoryPersistencePort } from "../ports/out/product-persistente.port";
import { SaveCategoryCommand } from "../ports/in/save-category.command";

@Injectable()
export class SaveCategoryService implements CategoriesUseCase {
    constructor(private categoryPersistencePort: CategoryPersistencePort){}

    async saveCategory(command: SaveCategoryCommand): Promise<void> {
        try {
            const category: Category = {
                description: command.description,
            };
            await this.categoryPersistencePort.persistCategory(category)
        } catch (error) {
            throw error;
        }

    }

    async getAllCategories(): Promise<Category[]> {
        
       return await this.categoryPersistencePort.getAllCategories()

    }
}