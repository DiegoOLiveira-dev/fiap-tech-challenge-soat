import { Provider } from "@nestjs/common"
import { PedidoUseCase } from "../ports/in/pedido.use-case"
import { PedidoService } from "./pedido.service"


export const Services: Provider[] =[
    {
        provide: PedidoUseCase,
        useClass: PedidoService
    }
]