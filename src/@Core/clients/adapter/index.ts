import { Provider } from "@nestjs/common";
import { ClientPersistenceAdapter } from "./gateways/client-persistence.adapter";
import { ClientPersistencePort } from "../base/interfaces/client-persistente.port";

export const ServicesOut: Provider[] = [
    {
        provide: ClientPersistencePort,
        useClass: ClientPersistenceAdapter
    },
]