import { Provider } from "@nestjs/common"
import { SaveProductUseCase } from "../ports/in/product.use-case"
import { SaveProductService } from "./product.service"
import { SaveProductCommand } from "../ports/in/product.command"

export const Services: Provider[] =[
    {
        provide: SaveProductUseCase,
        useClass: SaveProductService
    },
]