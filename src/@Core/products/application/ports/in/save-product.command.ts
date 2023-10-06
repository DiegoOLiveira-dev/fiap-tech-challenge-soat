export class SaveProductCommand {
    constructor(
        readonly name: string,
        readonly description: string,
        readonly price: string,
        readonly id_category: number,
        readonly image_url: string
    ) {}
}