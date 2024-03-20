import { Client } from "../../../clients/core/entity/Client";

export abstract class ClientPersistencePort {
    abstract persistClient(client: Client): Promise<any>
    abstract getAllClients(): Promise<Client[]>
    abstract getClientByCPF(filter: Record<string, any>): Promise<Client[]>
} 