import { Injectable } from "@nestjs/common";
import { PaymentMapper } from './payment.mapper';
import { PaymentPersistencePort } from "../../application/ports/out/payment-persistente.port";
import { Payment } from "../../domain/Payment";

@Injectable()
export class PaymentPersistenceAdapter implements PaymentPersistencePort {
    constructor(private paymentMapper: PaymentMapper) {}

    async persistPayment(payment: Payment) {
        return this.paymentMapper.createPayment(payment)
    }

    async getAllPayments(): Promise<Payment[]> {
        return await this.paymentMapper.getAllPayments()

    }
    async getOrderById(filter: Record<string, any>): Promise<Payment[]> {
        return await this.paymentMapper.getOrderById(filter)

    }
    async updateOrderById(id_order, status_payment): Promise<Payment> {
        return await this.paymentMapper.updateOrderById(id_order, status_payment)

    }

}