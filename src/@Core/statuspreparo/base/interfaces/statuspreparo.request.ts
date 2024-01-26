import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { SaveStatusPreparoCommand } from "src/@Core/statuspreparo/base/interfaces/statuspreparo.command";

export class SaveStatusPreparoRequest {
    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly id_status: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly descricao: string;


    toCommand(): SaveStatusPreparoCommand {
        return new SaveStatusPreparoCommand(this.id_status, this.descricao)
    }

}