import { SaveCategoryCommand } from '../../../application/ports/in/save-category.command';
import { Body, Controller, Get, HttpStatus, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SaveCategoryRequest } from "./save-category.request";
import { CategoriesUseCase } from '../../../../categories/application/ports/in/categories.use-case';

@Controller('categories')
export class CategoriesController {
    constructor(private readonly saveCategoryUseCase: CategoriesUseCase) {}

    @Post()
    @ApiBody({type: SaveCategoryRequest, description: 'Save Category Request', required: false})
    @ApiResponse({
        status: 201,
        description: 'Saved Successfully.'
    }) 
    @ApiTags('categories')
    @UsePipes(new ValidationPipe({transform: true}))
    save(@Body() request: SaveCategoryRequest) {
        const command: SaveCategoryCommand = request.toCommand();
        return this.saveCategoryUseCase.saveCategory(command)
    }

    @Get()
    @ApiTags('categories')
    async getAllProducts() {
        return await this.saveCategoryUseCase.getAllCategories()
    }
}