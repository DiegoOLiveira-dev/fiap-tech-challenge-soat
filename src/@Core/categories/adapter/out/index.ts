import { Provider } from "@nestjs/common";
import { CategoryMapper } from "./product.mapper";
import { CategoryPersistencePort } from "../../application/ports/out/product-persistente.port";
import { CategoryPersistenceAdapter } from "./product-persistence.adapter";

export const ServicesOut: Provider[] = [
    {
        provide: CategoryPersistencePort,
        useClass: CategoryPersistenceAdapter
    },
    CategoryMapper
]