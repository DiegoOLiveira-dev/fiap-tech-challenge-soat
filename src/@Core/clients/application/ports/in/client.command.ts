export class SaveClientCommand {
    constructor(
        readonly id_cliente: number,
        readonly name: string,
        readonly email: string,
    ) {}
}