import { Provider } from "@nestjs/common";
import { CategoryMapper } from "./category.mapper";
import { CategoryPersistencePort } from "../../application/ports/out/product-persistente.port";
import { CategoryPersistenceAdapter } from "./category-persistence.adapter";

export const ServicesOut: Provider[] = [
    {
        provide: CategoryPersistencePort,
        useClass: CategoryPersistenceAdapter
    },
    CategoryMapper
]