import { Injectable } from "@nestjs/common";
import { ClientPersistencePort } from "../../base/interfaces/client-persistente.port";
import { Client } from "../entity/Client";

@Injectable()
export class GetClientsUseCase  {
    constructor(private clientPersistencePort: ClientPersistencePort){}

    async getAllClients(): Promise<Client[]> {
        
       return await this.clientPersistencePort.getAllClients()

    }

}