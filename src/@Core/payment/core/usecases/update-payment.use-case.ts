import { Injectable } from "@nestjs/common";
import { PaymentPersistencePort } from "../../base/interfaces/payment-persistente.port";
import { Payment } from "../entity/Payment";

@Injectable()
export class UpdatePaymentUseCase {
    constructor(private paymentPersistencePort: PaymentPersistencePort){}

    async updateOrderById(id_order, status_payment): Promise<Payment> {
        return await this.paymentPersistencePort.updateOrderById(id_order, status_payment)
    }


}