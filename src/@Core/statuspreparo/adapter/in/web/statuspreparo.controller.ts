import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SaveStatusPreparoCommand } from "../../../application/ports/in/statuspreparo.command";
import { SaveStatusPreparoUseCase } from "../../../application/ports/in/statuspreparo.use-case";
import { SaveStatusPreparoRequest } from "./statuspreparo.request";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
//import { UpdateStatusPreparoRequest } from "./update-StatusPreparo.request";

@Controller('StatusPreparo')
export class SaveStatusPreparoController {
    constructor(private readonly saveStatusPreparoUseCase: SaveStatusPreparoUseCase) { }

    // @Post()
    // @ApiBody({ type: SaveProductRequest, description: 'Save Product Request', required: false })
    // @ApiResponse({
    //     status: 201,
    //     description: 'Saved Successfully.'
    // })
    // @ApiTags('products')
    // @UsePipes(new ValidationPipe({transform: true}))
    // save(@Body() request: SaveProductRequest) {
    //     const command: SaveProductCommand = request.toCommand();
    //     return this.saveProductUseCase.saveProduct(command)
    // }

    @Get()
    @ApiTags('StatusPreparo')
    async getAllStatusPreparo() {
        let status = await this.saveStatusPreparoUseCase.getAllStatusPreparos();
        return status
    }

    // @Get('filterbycategory')
    // @ApiTags('products')
    // async getProductsByCategory(@Query() query) {
    //     return await this.saveProductUseCase.getProductsByCategory(query.id)
    // }

    // @Delete(':id')
    // @ApiTags('products')
    // async deleteProductById(@Param('id') itemID) {
    //     return await this.saveProductUseCase.deleteProductById(itemID)
    // }

    // @Patch(':id')
    // @ApiTags('products')
    // @UsePipes(new ValidationPipe({ transform: true }))
    // updateProductById(@Param('id') itemID, @Body() request: UpdateProductRequest) {
    //     const command: SaveProductCommand = request.toCommand();
    //     return this.saveProductUseCase.updateProductById(itemID, command)
    // }
}