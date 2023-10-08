import { Body, Controller, Get, HttpStatus, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SaveProductCommand } from "./../../../application/ports/in/save-product.command";
import { SaveProductUseCase } from "./../../../application/ports/in/save-product.use-case";
import { SaveProductRequest } from "./save-product.request";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('save-product')
export class SaveProductController {
    constructor(private readonly saveProductUseCase: SaveProductUseCase) {}

    @Post()
    @ApiBody({type: SaveProductRequest, description: 'Save Product Request', required: false})
    @ApiResponse({
        status: 201,
        description: 'Saved Successfully.'
    }) 
    @ApiTags('lanchonete')
    @UsePipes(new ValidationPipe({transform: true}))
    save(@Body() request: SaveProductRequest) {
        const command: SaveProductCommand = request.toCommand();
        return this.saveProductUseCase.saveProduct(command)
    }

    @Get()
    @ApiTags('lanchonete')
    async getAllProducts() {
        return await this.saveProductUseCase.getAllProducts()
    }
}