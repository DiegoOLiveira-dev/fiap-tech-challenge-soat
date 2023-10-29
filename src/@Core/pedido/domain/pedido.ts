import { Product } from "src/@Core/products/domain/Products"

export class Pedido {
    id_status: string
    descricao_status: string
    id_cliente: string
    nome_cliente: string
    produtos: Product[]
    total: string
}