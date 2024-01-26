import { Injectable } from "@nestjs/common";
import { PaymentPersistencePort } from "../../base/interfaces/payment-persistente.port";
import { Payment } from "../entity/Payment";

@Injectable()
export class GetPaymentUseCase  {
    constructor(private paymentPersistencePort: PaymentPersistencePort){}


    async getAllPayments(): Promise<Payment[]> {
        
       return await this.paymentPersistencePort.getAllPayments()

    
    }

}