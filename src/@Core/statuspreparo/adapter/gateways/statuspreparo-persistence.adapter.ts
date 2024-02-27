import { Injectable } from "@nestjs/common";
import { StatusPreparoPersistencePort } from "../../base/interfaces/statuspreparo-persistente.port";
import { StatusPreparo } from "../../core/entity/StatusPreparo";
import { IDataServices } from "src/@Core/abstracts";

@Injectable()
export class StatusPreparoPersistenceAdapter implements StatusPreparoPersistencePort {
    constructor(private dataServices: IDataServices) { }

    async getAllStatusPreparo(): Promise<StatusPreparo[]> {
        const allStatusPreparos = await this.dataServices.statuspreparo.getAll()
        return allStatusPreparos
    }

}