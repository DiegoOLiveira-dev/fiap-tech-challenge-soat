import { Injectable } from "@nestjs/common";
import { PaymentPersistencePort } from "../../base/interfaces/payment-persistente.port";
import { Payment } from "../entity/Payment";
import { SavePaymentCommand } from "../../base/interfaces/payment.command";

@Injectable()
export class SavePaymentUseCase {
    constructor(private paymentPersistencePort: PaymentPersistencePort){}

    async savePayment(command: SavePaymentCommand): Promise<void> {
        try {
            const payment: Payment = {
                id_client: command.id_client,
                id_order: command.id_order,
                status_payment: command.status_payment
            };
            return await this.paymentPersistencePort.persistPayment(payment)
        } catch (error) {
            throw error;
        }

    }


}