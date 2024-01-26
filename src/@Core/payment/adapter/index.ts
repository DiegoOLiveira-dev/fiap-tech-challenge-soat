import { Provider } from "@nestjs/common";
import { PaymentPersistenceAdapter } from "./gateways/payment-persistence.adapter";
import { PaymentPersistencePort } from "../base/interfaces/payment-persistente.port";

export const ServicesOut: Provider[] = [
    {
        provide: PaymentPersistencePort,
        useClass: PaymentPersistenceAdapter
    },
]