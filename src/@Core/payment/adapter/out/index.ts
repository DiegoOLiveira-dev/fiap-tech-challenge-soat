import { Provider } from "@nestjs/common";
import { PaymentPersistenceAdapter } from "./payment-persistence.adapter";
import { PaymentMapper } from "./payment.mapper";
import { PaymentPersistencePort } from "../../application/ports/out/payment-persistente.port";

export const ServicesOut: Provider[] = [
    {
        provide: PaymentPersistencePort,
        useClass: PaymentPersistenceAdapter
    },
    PaymentMapper
]