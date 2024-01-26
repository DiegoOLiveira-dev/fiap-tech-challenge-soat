import { Provider } from "@nestjs/common";
import { StatusPreparoPersistencePort } from "../base/interfaces/statuspreparo-persistente.port";
import { StatusPreparoPersistenceAdapter } from "./gateways/statuspreparo-persistence.adapter";

export const ServicesOut: Provider[] = [
    {
        provide: StatusPreparoPersistencePort,
        useClass: StatusPreparoPersistenceAdapter
    },
]