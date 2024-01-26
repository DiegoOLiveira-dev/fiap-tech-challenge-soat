import { Category } from "../../../../categories_new/core/Category";

export class SaveProductCommand {
    constructor(
        readonly name: string,
        readonly description: string,
        readonly price: string,
        readonly category: Category,
        readonly image_url: string,
    ) { }
}