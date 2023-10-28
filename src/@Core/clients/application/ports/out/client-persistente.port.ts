import { Client } from "src/@Core/clients/domain/Client";

export abstract class ClientPersistencePort {
    abstract persistClient(product: Client): Promise<any>
    abstract getAllClients(): Promise<Client[]>
} 