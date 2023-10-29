import { Category } from "src/@Core/categories/domain/Category"

export class Product {
    name: string
    description: string
    price: string
    image_url: string
    category: Category
    qtde: number
}