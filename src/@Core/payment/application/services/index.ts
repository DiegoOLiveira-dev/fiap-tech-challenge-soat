import { Provider } from "@nestjs/common"
import { SavePaymentService } from "./payment.service"
import { SavePaymentUseCase } from "../ports/in/payment.use-case"

export const Services: Provider[] =[
    {
        provide: SavePaymentUseCase,
        useClass: SavePaymentService
    },
]