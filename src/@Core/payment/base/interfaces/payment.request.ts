import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { SavePaymentCommand } from "src/@Core/payment/base/interfaces/payment.command";

export class SavePaymentRequest {
    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly id_client: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly id_order: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly status_payment: string;

    toCommand(): SavePaymentCommand {
        return new SavePaymentCommand(this.id_client, this.id_order, this.status_payment)
    }
    
}