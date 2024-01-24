import { StatusPreparo } from "src/@Core/statuspreparo/domain/StatusPreparo";
import { SaveStatusPreparoCommand } from "./statuspreparo.command";

export abstract class SaveStatusPreparoUseCase {
    // abstract saveStatusPreparo(command: SaveStatusPreparoCommand): Promise<void>
    abstract getAllStatusPreparos(): Promise<StatusPreparo[]>
    // abstract getStatusPreparosByCategory(id?: number): Promise<StatusPreparo[]>
    // abstract deleteStatusPreparoById(id: number): Promise<StatusPreparo>
    // abstract updateStatusPreparoById(id: number, command: SaveStatusPreparoCommand): Promise<StatusPreparo>
}