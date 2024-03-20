import { Payment } from "../../../payment/core/entity/Payment";

export abstract class PaymentPersistencePort {
    abstract persistPayment(payment: Payment): Promise<any>
    abstract getAllPayments(): Promise<Payment[]>
    abstract getOrderById(id_order: string): Promise<Payment[]>
    abstract updateOrderById(id_order, status_payment): Promise<Payment>
} 