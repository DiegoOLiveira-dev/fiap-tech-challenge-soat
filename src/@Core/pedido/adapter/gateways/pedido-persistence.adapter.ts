import { HttpException, Injectable } from "@nestjs/common";
import { Pedido } from "../../core/entity/pedido";
import { PedidoPersistencePort } from "../../base/interfaces/pedido-persistente.port";
import { Product } from "src/@Core/products/core/entity/Products";
import { IDataServices } from "src/@Core/abstracts";

@Injectable()
export class PedidoPersistenceAdapter implements PedidoPersistencePort {
    constructor(private dataServices: IDataServices) { }
    
    updateStatus(body: any): Promise<any> {
        const id_pedido = body.id_pedido
        const new_status = body.newStatus

        return this.dataServices.pedido.patchById(id_pedido, new_status)

    }
    
    async getSelectedProduct(filter: any): Promise<Product[]> {
        const selectedProduct = await this.dataServices.products.getByFilter(filter)
        return selectedProduct    }

    async persistPedido(pedido: Pedido) {
        try {
            const createdpedido = await this.dataServices.pedido.create(pedido);
            return createdpedido;
          } catch (error) {
            throw new HttpException(error.errmsg, 400)
          }    }

    async getAllPedido(): Promise<Pedido[]> {
        const allpedido = await this.dataServices.pedido.getAll()
        return allpedido
    }

    

}