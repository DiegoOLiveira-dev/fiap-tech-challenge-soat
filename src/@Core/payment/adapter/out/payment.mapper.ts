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
}
