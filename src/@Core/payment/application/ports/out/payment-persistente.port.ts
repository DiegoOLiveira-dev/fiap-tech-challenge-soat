import { Payment } from "src/@Core/payment/domain/Payment";

export abstract class PaymentPersistencePort {
    abstract persistPayment(payment: Payment): Promise<any>
    abstract getAllPayments(): Promise<Payment[]>
} 