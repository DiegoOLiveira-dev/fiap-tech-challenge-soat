import { Client } from "src/@Core/clients/domain/Client";

export abstract class ClientPersistencePort {
    abstract persistClient(client: Client): Promise<any>
    abstract getAllClients(): Promise<Client[]>
    abstract getClientByCPF(filter: Record<string, any>): Promise<Client[]>
} 