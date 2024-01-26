import { Injectable } from "@nestjs/common";
import { ClientPersistencePort } from "../../base/interfaces/client-persistente.port";
import { Client } from "../entity/Client";

@Injectable()
export class GetClientsByCpfUseCase {
    constructor(private clientPersistencePort: ClientPersistencePort){}

    async getClientByCPF(id?: number): Promise<Client[]> {
        const filter = {cpf_client: id}
        return await this.clientPersistencePort.getClientByCPF(filter)
    }
}