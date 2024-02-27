import { Injectable } from "@nestjs/common";
import { StatusPreparoPersistencePort } from "../../base/interfaces/statuspreparo-persistente.port";
import { StatusPreparo } from "../entity/StatusPreparo";
import { SaveStatusPreparoCommand } from "../../base/interfaces/statuspreparo.command";

@Injectable()
export class SaveStatusPreparoUseCase {
    constructor(private StatusPreparoPersistencePort: StatusPreparoPersistencePort) { }

    async getAllStatusPreparos(): Promise<StatusPreparo[]> {

        return await this.StatusPreparoPersistencePort.getAllStatusPreparo()

    }


}