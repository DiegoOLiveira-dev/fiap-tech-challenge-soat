import { Provider } from "@nestjs/common"
import { CategoriesUseCase } from "../ports/in/categories.use-case"
import { SaveCategoryService } from "./save-category.service"

export const Services: Provider[] =[
    {
        provide: CategoriesUseCase,
        useClass: SaveCategoryService
    },
]