import { Provider } from "@nestjs/common";
import { ClientPersistenceAdapter } from "./client-persistence.adapter";
import { ClientMapper } from "./client.mapper";
import { ClientPersistencePort } from "../../application/ports/out/client-persistente.port";

export const ServicesOut: Provider[] = [
    {
        provide: ClientPersistencePort,
        useClass: ClientPersistenceAdapter
    },
    ClientMapper
]