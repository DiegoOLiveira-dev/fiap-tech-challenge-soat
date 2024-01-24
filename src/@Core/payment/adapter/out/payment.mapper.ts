import { HttpException, Injectable } from "@nestjs/common";
import { IDataServices } from "src/@Core/abstracts/data-services.abstract";
import { Payment } from "../../domain/Payment";

@Injectable()
export class PaymentMapper {
  constructor(private dataServices: IDataServices) {}

  async createPayment(payment: Payment): Promise<Payment> {

    try {
      const createdBook = await this.dataServices.payment.create(payment);
      return createdBook;
    } catch (error) {
      throw new HttpException(error.errmsg, 400)

    }

  }

  async getAllPayments(): Promise<Payment[]> {
    const allPayments = await this.dataServices.payment.getAll()
    return allPayments
  }

  async getOrderById(id_order): Promise<Payment[]> {
    const allPayments = await this.dataServices.payment.getByFilter(id_order)
    return allPayments
  }

  async updateOrderById(id_order, status_payment): Promise<Payment> {
    const status = await this.dataServices.payment.getByFilter({_id: id_order})
    if(status[0].status_payment == 'true') {
      console.log('pagamento realizado', status[0].status_payment)
    } else {
      status[0].status_payment = status_payment
      const allPayments = await this.dataServices.payment.updateById(id_order, status[0])
      return allPayments
    }
  }
}
