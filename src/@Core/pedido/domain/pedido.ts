import { ApiProperty } from "@nestjs/swagger"
import { Product } from "src/@Core/products/domain/Products"

export class Pedido {
    id_status: string
    descricao_status: string
    id_cliente: string
    nome_cliente: string
    produtos: SelectedItems[]
    total: number
}

export class SelectedItems {
    @ApiProperty()
    qtd: number
    @ApiProperty()
    produto: Product
}