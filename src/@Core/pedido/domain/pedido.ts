import { ApiProperty } from "@nestjs/swagger"
import { Product } from "src/@Core/products/domain/Products"

export class Pedido {
    id_status: string
    descricao_status: string
    id_cliente: string
    nome_cliente: string
    produtos: SelectedItemsProdutos[]
    total: number
    test: string
}

export class SelectedItemsProdutos {
    @ApiProperty()
    qtd: number
    @ApiProperty()
    produto: Product
}


export class SelectedStatusPedido {
    @ApiProperty()
    qtd: number
    @ApiProperty()
    produto: Product
}