import { Category } from './../../../domain/Category';

export abstract class CategoryPersistencePort {
    abstract persistCategory(product: Category): Promise<void>
    abstract getAllCategories(): Promise<Category[]>

} 