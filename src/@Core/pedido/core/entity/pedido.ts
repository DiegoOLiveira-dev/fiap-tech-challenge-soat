import { ApiProperty } from "@nestjs/swagger"
import { StatusPreparo } from "../../../statuspreparo/core/entity/StatusPreparo"
import { Product } from "../../../products/core/entity/Products"

export class Pedido {
    id_cliente: string
    nome_cliente: string
    produtos: SelectedItemsProdutos[]
    status_pedido: SelectedStatusPedido[]
    date_order: string
    total: number
}

export class SelectedItemsProdutos {
    @ApiProperty()
    qtd: number
    @ApiProperty()
    produto: Product
}


export class SelectedStatusPedido {
    @ApiProperty()
    status: StatusPreparo

    @ApiProperty()
    date: string
}