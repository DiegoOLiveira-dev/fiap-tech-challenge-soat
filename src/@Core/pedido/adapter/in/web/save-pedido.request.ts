import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { SavePedidoCommand } from "../../../application/ports/in/save-pedido.command";
import { SelectedItems } from "src/@Core/pedido/domain/pedido";
import { Selected } from "src/@Core/frameworks/data-services/mongo/model/selected";

export class SavePedidoRequest {

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly id_status: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly descricao_status: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly id_cliente: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly nome_cliente: string;


    @Expose()
    @IsNotEmpty()
    @ApiProperty({type: [Selected]})
    readonly produtos: Selected[];

    @Expose()
    @ApiProperty()
    readonly total: number;


    toCommand(): SavePedidoCommand {
        return new SavePedidoCommand(this.id_status, this.descricao_status, this.id_cliente,
            this.nome_cliente, this.produtos, this.total)
    }

}