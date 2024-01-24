import { Payment } from "src/@Core/payment/domain/Payment";

export abstract class PaymentPersistencePort {
    abstract persistPayment(payment: Payment): Promise<any>
    abstract getAllPayments(): Promise<Payment[]>
    abstract getOrderById(filter: Record<string, any>): Promise<Payment[]>
    abstract updateOrderById(id_order, status_payment): Promise<Payment>
} 