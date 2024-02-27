export class SaveClientCommand {
    constructor(
        readonly cpf_client: number,
        readonly name: string,
        readonly email: string,
    ) {}
}