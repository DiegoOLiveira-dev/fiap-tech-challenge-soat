import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { IDataServices } from "../../../abstracts/data-services.abstract";
import { Pedido } from "../../domain/pedido";

@Injectable()
export class PedidoMapper {
  constructor(private dataServices: IDataServices) {}

async createPedido(pedido: Pedido): Promise<Pedido> {

    try {
      console.log('request-PedidoMapper:', pedido);
      const createdpedido = await this.dataServices.pedido.create(pedido);
      return createdpedido;
    } catch (error) {
      throw new HttpException(error.errmsg, 400)
    }
  }

  async getAllPedido(): Promise<Pedido[]> {
    const allpedido = await this.dataServices.pedido.getAll()
    return allpedido
  }
}
