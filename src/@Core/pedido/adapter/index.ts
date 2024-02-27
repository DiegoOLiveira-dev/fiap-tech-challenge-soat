import { Provider } from "@nestjs/common";
import { PedidoPersistencePort } from "../base/interfaces/pedido-persistente.port";
import { PedidoPersistenceAdapter } from "./gateways/pedido-persistence.adapter";

export const ServicesOut: Provider[] = [
    {
        provide: PedidoPersistencePort,
        useClass: PedidoPersistenceAdapter
    },
]