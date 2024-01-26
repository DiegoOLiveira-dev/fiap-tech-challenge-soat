import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { SavePedidoCommand } from "./save-pedido.command";
import { Selected, SelectedStatusPedido } from "src/@Core/frameworks/data-services/mongo/model/selected";

export class SavePedidoRequest {

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
    @ApiProperty({ type: [Selected] })
    readonly produtos: Selected[];

    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: [SelectedStatusPedido] })
    readonly status_pedido: SelectedStatusPedido[];

    @Expose()
    @ApiProperty()
    readonly total: number;


    toCommand(): SavePedidoCommand {
        return new SavePedidoCommand(this.id_cliente,
            this.nome_cliente, this.produtos, this.status_pedido, this.total)
    }

}