import { Injectable } from "@nestjs/common";
import { SavePaymentUseCase } from "../ports/in/payment.use-case";
import { PaymentPersistencePort } from "../ports/out/payment-persistente.port";
import { Payment } from "../../domain/Payment";
import { SavePaymentCommand } from "../ports/in/payment.command";

@Injectable()
export class SavePaymentService implements SavePaymentUseCase {
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

    async getAllPayments(): Promise<Payment[]> {
        
       return await this.paymentPersistencePort.getAllPayments()

    
    }
    async getOrderById(id_order): Promise<Payment[]> {
        const filter = {_id: id_order}
        return await this.paymentPersistencePort.getOrderById(filter)

    }

    async updateOrderById(id_order, status_payment): Promise<Payment> {
        return await this.paymentPersistencePort.updateOrderById(id_order, status_payment)
    }


}