import { Injectable } from "@nestjs/common";
import { ClientMapper } from './client.mapper';
import { ClientPersistencePort } from "../../application/ports/out/client-persistente.port";
import { Client } from "../../domain/Client";

@Injectable()
export class ClientPersistenceAdapter implements ClientPersistencePort {
    constructor(private clientMapper: ClientMapper) {}

    async persistClient(client: Client) {
        return this.clientMapper.createClient(client)
    }

    async getAllClients(): Promise<Client[]> {
        return await this.clientMapper.getAllClients()

    }

    async getClientByCPF(filter: Record<string, any>): Promise<Client[]> {
        return await this.clientMapper.getClientByCPF(filter)
    }
}