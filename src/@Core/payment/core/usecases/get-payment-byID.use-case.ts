import { Injectable } from "@nestjs/common";
import { PaymentPersistencePort } from "../../base/interfaces/payment-persistente.port";
import { Payment } from "../entity/Payment";

@Injectable()
export class GetPaymentByIdUseCase {
    constructor(private paymentPersistencePort: PaymentPersistencePort){}

    async getOrderById(id_order): Promise<Payment[]> {
        return await this.paymentPersistencePort.getOrderById(id_order)

    }

}