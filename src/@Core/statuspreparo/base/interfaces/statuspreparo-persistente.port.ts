import { StatusPreparo } from "src/@Core/statuspreparo/core/entity/StatusPreparo";

export abstract class StatusPreparoPersistencePort {
    //abstract persistStatusPreparo(statuspreparo: StatusPreparo): Promise<any>
    abstract getAllStatusPreparo(): Promise<StatusPreparo[]>
    //abstract deleteStatusPreparoById(id: number): Promise<StatusPreparo>
    //abstract updateStatusPreparoById(id: number, statuspreparo: StatusPreparo): Promise<StatusPreparo>

} 