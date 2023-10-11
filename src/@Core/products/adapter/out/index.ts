import { Provider } from "@nestjs/common";
import { ProductPersistencePort } from "../../application/ports/out/product-persistente.port";
import { ProductPersistenceAdapter } from "./product-persistence.adapter";
import { ProductMapper } from "./product.mapper";

export const ServicesOut: Provider[] = [
    {
        provide: ProductPersistencePort,
        useClass: ProductPersistenceAdapter
    },
    ProductMapper
]