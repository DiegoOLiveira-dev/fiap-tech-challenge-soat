import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { SaveClientCommand } from "../../../clients/base/interfaces/client.command";

export class SaveClientRequest {
    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly cpf_client: number;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly email: string;

    toCommand(): SaveClientCommand {
        return new SaveClientCommand(this.cpf_client, this.name, this.email)
    }
    
}