import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { Category } from "src/@Core/frameworks/data-services/mongo/model/category-entity";
import { SaveProductCommand } from "src/@Core/products/base/interfaces/product.command";

export class UpdateProductRequest {
    @Expose()
    @ApiProperty()
    readonly name: string;

    @Expose()
    @ApiProperty()
    readonly price: string;

    @Expose()
    @ApiProperty()
    readonly description: string;

    @Expose()
    @ApiProperty()
    readonly image_url: string;

    @Expose()
    @ApiProperty()
    readonly category: Category;

    toCommand(): SaveProductCommand {
        return new SaveProductCommand(this.name, this.description, this.price, this.category, this.image_url)
    }

}