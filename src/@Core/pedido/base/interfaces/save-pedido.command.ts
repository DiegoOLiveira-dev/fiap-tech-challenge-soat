import { SelectedItemsProdutos, SelectedStatusPedido } from "../../../pedido/core/entity/pedido";

export class SavePedidoCommand {
    ///TODO: ADICIONAR CAMPOS
    constructor(
        readonly id_cliente: string,
        readonly nome_cliente: string,
        readonly produtos: SelectedItemsProdutos[],
        readonly status_pedido: SelectedStatusPedido[],
        readonly date_order: string,
        readonly total?: number
    ) { }
}