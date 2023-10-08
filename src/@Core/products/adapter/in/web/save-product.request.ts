import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { SaveProductCommand } from "src/@Core/products/application/ports/in/save-product.command";

export class SaveProductRequest {
    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly price: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly description: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly image_url: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly id_category: number;

    toCommand(): SaveProductCommand {
        return new SaveProductCommand(this.name, this.description, this.price, this.id_category, this.image_url)
    }
    
}