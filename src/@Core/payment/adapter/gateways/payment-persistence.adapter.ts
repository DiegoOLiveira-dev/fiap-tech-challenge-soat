import { HttpException, Injectable } from "@nestjs/common";
import { PaymentPersistencePort } from "../../base/interfaces/payment-persistente.port";
import { Payment } from "../../core/entity/Payment";
import { IDataServices } from "src/@Core/abstracts";

@Injectable()
export class PaymentPersistenceAdapter implements PaymentPersistencePort {
    constructor(private dataServices: IDataServices) {}

    async persistPayment(payment: Payment) {
        try {
            const createdBook = await this.dataServices.payment.create(payment);
            return createdBook;
          } catch (error) {
            throw new HttpException(error.errmsg, 400)
      
          }    }

    async getAllPayments(): Promise<Payment[]> {
        const allPayments = await this.dataServices.payment.getAll()
        return allPayments
    }
    async getOrderById(id_order: string): Promise<Payment[]> {
        const filter = {_id: id_order}
        const allPayments = await this.dataServices.payment.getByFilter(filter)
        return allPayments
    }
    async updateOrderById(id_order, status_payment): Promise<Payment> {
        const status = await this.dataServices.payment.getByFilter({_id: id_order})
        if(status[0].status_payment == 'true') {
          console.log('pagamento realizado', status[0].status_payment)
        } else {
          status[0].status_payment = status_payment
          const allPayments = await this.dataServices.payment.updateById(id_order, status[0])
    
          await this.dataServices.pedido.patchById(status[0].id_order, {"date": new Date().toString(), "status": "65b02ea665520ae647add25e"})
    
          return allPayments
        }
    }

}