import { Injectable } from "@nestjs/common";
import { SaveClientUseCase } from "../ports/in/client.use-case";
import { ClientPersistencePort } from "../ports/out/client-persistente.port";
import { Client } from "../../domain/Client";
import { SaveClientCommand } from "../ports/in/client.command";

@Injectable()
export class SaveClientService implements SaveClientUseCase {
    constructor(private clientPersistencePort: ClientPersistencePort){}

    async saveClient(command: SaveClientCommand): Promise<void> {
        try {
            const client: Client = {
                id_cliente: command.id_cliente,
                name: command.name,
                email: command.email
            };
            await this.clientPersistencePort.persistClient(client)
        } catch (error) {
            throw error;
        }

    }

    async getAllClients(): Promise<Client[]> {
        
       return await this.clientPersistencePort.getAllClients()

    }
}