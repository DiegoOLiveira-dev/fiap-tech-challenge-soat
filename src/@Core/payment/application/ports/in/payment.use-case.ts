import { SavePaymentCommand } from "./payment.command";
import { Payment } from "src/@Core/payment/domain/Payment";

export abstract class SavePaymentUseCase {
    abstract savePayment(command: SavePaymentCommand): Promise<void>
    abstract getAllPayments(): Promise<Payment[]>
}