import { Provider } from "@nestjs/common";
import { StatusPreparoPersistencePort } from "../../application/ports/out/statuspreparo-persistente.port";
import { StatusPreparoPersistenceAdapter } from "./statuspreparo-persistence.adapter";
import { StatusPreparoMapper } from "./statuspreparo.mapper";

export const ServicesOut: Provider[] = [
    {
        provide: StatusPreparoPersistencePort,
        useClass: StatusPreparoPersistenceAdapter
    },
    StatusPreparoMapper
]