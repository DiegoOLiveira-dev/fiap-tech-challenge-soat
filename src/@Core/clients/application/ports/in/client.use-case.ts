import { SaveClientCommand } from "./client.command";
import { Client } from "src/@Core/clients/domain/Client";

export abstract class SaveClientUseCase {
    abstract saveClient(command: SaveClientCommand): Promise<void>
    abstract getAllClients(): Promise<Client[]>
}