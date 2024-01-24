import { SavePaymentCommand } from "./payment.command";
import { Payment } from "src/@Core/payment/domain/Payment";

export abstract class SavePaymentUseCase {
    abstract savePayment(command: SavePaymentCommand): Promise<void>
    abstract getAllPayments(): Promise<Payment[]>
    abstract getOrderById(id_order?: string): Promise<Payment[]>
    abstract updateOrderById(id_order?: string, status_payment?: string): Promise<Payment>
}