import { BadRequestException, HttpException, Injectable } from "@nestjs/common";
import { IDataServices } from "../../../abstracts/data-services.abstract";
import { Pedido } from "../../domain/pedido";
import { Product } from "src/@Core/products/domain/Products";

@Injectable()
export class PedidoMapper {
  constructor(private dataServices: IDataServices) { }

  async createPedido(pedido: Pedido): Promise<Pedido> {

    try {
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

  async getSelectedProduct(filter: any): Promise<Product[]> {
    const selectedProduct = await this.dataServices.products.getByFilter(filter)
    return selectedProduct
  }

  async getSelectedOrder(filter: any): Promise<Pedido[]> {
    const selectedOrder = await this.dataServices.pedido.getByFilter(filter)
    return selectedOrder
  }
}
