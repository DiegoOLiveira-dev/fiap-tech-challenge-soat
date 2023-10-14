import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SaveProductCommand } from "./../../../application/ports/in/save-product.command";
import { SaveProductUseCase } from "./../../../application/ports/in/save-product.use-case";
import { SaveProductRequest } from "./save-product.request";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('products')
export class SaveProductController {
    constructor(private readonly saveProductUseCase: SaveProductUseCase) {}

    @Post()
    @ApiBody({type: SaveProductRequest, description: 'Save Product Request', required: false})
    @ApiResponse({
        status: 201,
        description: 'Saved Successfully.'
    }) 
    @ApiTags('products')
    @UsePipes(new ValidationPipe({transform: true}))
    save(@Body() request: SaveProductRequest) {
        const command: SaveProductCommand = request.toCommand();
        return this.saveProductUseCase.saveProduct(command)
    }

    @Get()
    @ApiTags('products')
    async getAllProducts() {
        return await this.saveProductUseCase.getAllProducts()
    }

    @Get('filterbycategory')
    @ApiTags('products')
    async getProductsByCategory(@Query() query) {
        return await this.saveProductUseCase.getProductsByCategory(query.id)
    }

    @Delete(':id')
    @ApiTags('products')
    async deleteProductById(@Param('id') itemID) {
        return await this.saveProductUseCase.deleteProductById(itemID)
    }
}