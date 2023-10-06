import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { SaveProductCommand } from "./../../../application/ports/in/save-product.command";
import { SaveProductUseCase } from "./../../../application/ports/in/save-product.use-case";
import { SaveProductRequest } from "./save-product.request";

@Controller('save-product')
export class SaveProductController {
    constructor(private readonly saveProductUseCase: SaveProductUseCase) {}

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    save(@Body() request: SaveProductRequest) {
        const command: SaveProductCommand = request.toCommand();
        return this.saveProductUseCase.saveProduct(command)
    }
}