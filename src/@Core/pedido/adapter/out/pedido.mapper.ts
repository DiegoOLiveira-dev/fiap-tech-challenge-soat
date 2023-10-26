import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { IDataServices } from "../../../abstracts/data-services.abstract";
import { Pedido } from "../../domain/pedido";

@Injectable()
export class PedidoMapper {
  constructor(private dataServices: IDataServices) {}

  async getAllPedido(): Promise<Pedido[]> {
    const allpedido = await this.dataServices.pedido.getAll()
    return allpedido
  }
}
