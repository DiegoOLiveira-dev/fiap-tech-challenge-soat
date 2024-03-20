import { HttpException, Injectable } from "@nestjs/common";
import { ClientPersistencePort } from "../../base/interfaces/client-persistente.port";
import { Client } from "../../core/entity/Client";
import { IDataServices } from "../../../abstracts";

@Injectable()
export class ClientPersistenceAdapter implements ClientPersistencePort {
    constructor(private dataServices: IDataServices) {}

    async persistClient(client: Client) {
        try {
            const createdBook = await this.dataServices.clients.create(client);
            return createdBook;
          } catch (error) {
            throw new HttpException(error.errmsg, 400)
        
          }
    }

    async getAllClients(): Promise<Client[]> {
        const allClients = await this.dataServices.clients.getAll()
        return allClients
    }

    async getClientByCPF(filter: Record<string, any>): Promise<Client[]> {
        const client = await this.dataServices.clients.getByFilter(filter)
        return client    }
}

