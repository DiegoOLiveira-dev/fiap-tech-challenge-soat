import { Provider } from "@nestjs/common"
import { SaveClientService } from "./client.service"
import { SaveClientUseCase } from "../ports/in/client.use-case"

export const Services: Provider[] =[
    {
        provide: SaveClientUseCase,
        useClass: SaveClientService
    },
]