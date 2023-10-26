import { Provider } from "@nestjs/common";
import { PedidoMapper } from "./pedido.mapper";
import { PedidoPersistencePort } from "../../application/ports/out/pedido-persistente.port";
import { PedidoPersistenceAdapter } from "./pedido-persistence.adapter";

export const ServicesOut: Provider[] = [
    {
        provide: PedidoPersistencePort,
        useClass: PedidoPersistenceAdapter
    },
    PedidoMapper
]