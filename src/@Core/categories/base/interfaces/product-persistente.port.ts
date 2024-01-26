import { Category } from '../../core/Category';

export abstract class CategoryPersistencePort {
    abstract persistCategory(product: Category): Promise<Category>
    abstract getAllCategories(): Promise<Category[]>

} 