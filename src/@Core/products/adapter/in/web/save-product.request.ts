import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { SaveProductCommand } from "src/@Core/products/application/ports/in/save-product.command";

export class SaveProductRequest {
    @Expose()
    @IsNotEmpty()
    readonly name: string;

    @Expose()
    @IsNotEmpty()
    readonly price: string;

    @Expose()
    @IsNotEmpty()
    readonly description: string;

    @Expose()
    @IsNotEmpty()
    readonly image_url: string;

    @Expose()
    @IsNotEmpty()
    readonly id_category: number;

    toCommand(): SaveProductCommand {
        return new SaveProductCommand(this.name, this.description, this.price, this.id_category, this.image_url)
    }
    
}