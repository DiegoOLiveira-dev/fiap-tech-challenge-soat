import { Provider } from "@nestjs/common";
import { CategoryPersistencePort } from "../base/interfaces/product-persistente.port";
import { CategoryPersistenceAdapter } from "./gateways/category-persistence.gateway";

export const ServicesOut: Provider[] = [
    {
        provide: CategoryPersistencePort,
        useClass: CategoryPersistenceAdapter
    },
]