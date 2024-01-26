import { ApiProperty } from "@nestjs/swagger"
import { StatusPreparo } from "src/@Core/StatusPreparo/domain/StatusPreparo"
import { Product } from "src/@Core/products/core/entity/Products"

export class Pedido {
    id_cliente: string
    nome_cliente: string
    produtos: SelectedItemsProdutos[]
    status_pedido: SelectedStatusPedido[]
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