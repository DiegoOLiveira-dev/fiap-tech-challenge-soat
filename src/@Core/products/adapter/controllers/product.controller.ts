import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SaveProductCommand } from "../../base/interfaces/product.command";
import { SaveProductRequest } from "../../base/interfaces/product.request";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateProductRequest } from "../../base/interfaces/update-product.request";
import { GetProductUseCase } from "../../core/usecases/get-product.use-case";
import { GetProductCategoryUseCase } from "../../core/usecases/get-product-by-category.use-case";
import { UpdateProductUseCase } from "../../core/usecases/update-product.use-case";
import { DeleteProductUseCase } from "../../core/usecases/delete-product.use-case";
import { SaveProductUseCase } from "../../core/usecases/save-product.use-case";

@Controller('products')
export class SaveProductController {
    constructor(
        private readonly saveProductUseCase: SaveProductUseCase,
        private readonly getProductUseCase: GetProductUseCase,
        private readonly getProductByCaregoryUseCase: GetProductCategoryUseCase,
        private readonly updateProductUseCase: UpdateProductUseCase,
        private readonly deleteProductUseCase: DeleteProductUseCase

        ) {}

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
        return await this.getProductUseCase.getAllProducts()
    }

    @Get('filterbycategory')
    @ApiTags('products')
    async getProductsByCategory(@Query() query) {
        return await this.getProductByCaregoryUseCase.getProductsByCategory(query.id)
    }

    @Delete(':id')
    @ApiTags('products')
    async deleteProductById(@Param('id') itemID) {
        return await this.deleteProductUseCase.deleteProductById(itemID)
    }

    @Patch(':id')
    @ApiTags('products')
    @UsePipes(new ValidationPipe({transform: true}))
    updateProductById(@Param('id') itemID, @Body() request: UpdateProductRequest) {
        const command: SaveProductCommand = request.toCommand();
        return this.updateProductUseCase.updateProductById(itemID, command)
    }
}