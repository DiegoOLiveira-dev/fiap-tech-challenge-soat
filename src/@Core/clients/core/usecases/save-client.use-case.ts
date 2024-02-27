import { Injectable } from "@nestjs/common";
import { ClientPersistencePort } from "../../base/interfaces/client-persistente.port";
import { Client } from "../entity/Client";
import { SaveClientCommand } from "../../base/interfaces/client.command";

@Injectable()
export class SaveClientUseCase {
    constructor(private clientPersistencePort: ClientPersistencePort){}

    async saveClient(command: SaveClientCommand): Promise<void> {
        try {
            const client: Client = {
                cpf_client: command.cpf_client,
                name: command.name,
                email: command.email
            };
            await this.clientPersistencePort.persistClient(client)
        } catch (error) {
            throw error;
        }

    }
}