import { Provider } from "@nestjs/common";
import { ProductPersistencePort } from "../base/interfaces/product-persistente.port";
import { ProductPersistenceAdapter } from "./gateways/product-persistence.adapter";

export const ServicesOut: Provider[] = [
    {
        provide: ProductPersistencePort,
        useClass: ProductPersistenceAdapter
    },
]