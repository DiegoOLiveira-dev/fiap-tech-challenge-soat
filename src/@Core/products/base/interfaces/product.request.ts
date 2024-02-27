import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Category } from "src/@Core/frameworks/data-services/mongo/model/category-entity";
import { SaveProductCommand } from "src/@Core/products/base/interfaces/product.command";

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
    readonly category: Category;

    toCommand(): SaveProductCommand {
        return new SaveProductCommand(this.name, this.description, this.price, this.category, this.image_url)
    }

}