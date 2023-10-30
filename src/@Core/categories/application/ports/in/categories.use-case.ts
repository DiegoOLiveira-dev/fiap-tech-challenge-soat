import { Category } from './../../../domain/Category';
import { SaveCategoryCommand } from './save-category.command';

export abstract class CategoriesUseCase {
    abstract saveCategory(command: SaveCategoryCommand): Promise<void>
    abstract getAllCategories(): Promise<Category[]>

}