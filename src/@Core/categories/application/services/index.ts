import { Provider } from "@nestjs/common"
import { CategoriesUseCase } from "../ports/in/categories.use-case"
import { SaveCategoryService } from "./category.service"

export const Services: Provider[] =[
    {
        provide: CategoriesUseCase,
        useClass: SaveCategoryService
    },
]