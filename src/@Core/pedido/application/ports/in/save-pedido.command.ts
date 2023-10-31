import { SelectedItems } from "src/@Core/pedido/domain/pedido";
import { Product } from "src/@Core/products/domain/Products";

export class SavePedidoCommand {
    ///TODO: ADICIONAR CAMPOS
    constructor(
        readonly id_status: string,
        readonly descricao_status: string,
        readonly id_cliente: string,
        readonly nome_cliente: string,
        readonly produtos: SelectedItems[],
        readonly total?: number
    ) { }
}