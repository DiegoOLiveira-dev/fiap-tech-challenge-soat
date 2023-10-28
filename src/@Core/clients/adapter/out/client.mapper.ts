import { HttpException, Injectable } from "@nestjs/common";
import { IDataServices } from "src/@Core/abstracts/data-services.abstract";
import { Client } from "../../domain/Client";

@Injectable()
export class ClientMapper {
  constructor(private dataServices: IDataServices) {}

  async createClient(client: Client): Promise<Client> {

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
}
