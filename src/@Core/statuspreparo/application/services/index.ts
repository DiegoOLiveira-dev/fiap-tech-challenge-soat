import { Provider } from "@nestjs/common"
import { SaveStatusPreparoUseCase } from "../ports/in/statuspreparo.use-case"
import { SaveStatusPreparoService } from "./statuspreparo.service"
import { SaveStatusPreparoCommand } from "../ports/in/statuspreparo.command"

export const Services: Provider[] = [
    {
        provide: SaveStatusPreparoUseCase,
        useClass: SaveStatusPreparoService
    },
]