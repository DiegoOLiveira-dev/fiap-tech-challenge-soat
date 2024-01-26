export class SavePaymentCommand {
    constructor(
        readonly id_client: string,
        readonly id_order: string,
        readonly status_payment: string,
    ) {}
}