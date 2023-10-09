import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { SaveCategoryCommand } from "../../../application/ports/in/save-category.command";

export class SaveCategoryRequest {

    @Expose()
    @IsNotEmpty()
    @ApiProperty()
    readonly description: string;

    toCommand(): SaveCategoryCommand {
        return new SaveCategoryCommand(this.description)
    }
    
}