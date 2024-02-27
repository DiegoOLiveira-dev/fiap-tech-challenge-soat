import { Body, Controller, Get, HttpStatus, Post, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { GetCategoryService } from "../../core/usecases/get-categories.use-case";
import { SaveCategoryService } from "../../core/usecases/save-category.use-case";
import { SaveCategoryRequest } from "../../base/interfaces/save-category.request";


@Controller('categories')
export class CategoriesController {
    constructor(private readonly saveCategoryUseCase: SaveCategoryService, private readonly getCategoryUseCase: GetCategoryService ) {}

    @Post()
    @ApiResponse({
        status: 201,
        description: 'Saved Successfully.'
    }) 
    @ApiTags('categories')
    @UsePipes(new ValidationPipe({transform: true}))
    save(@Body() request: SaveCategoryRequest) {
        return this.saveCategoryUseCase.saveCategory(request)
    }

    @Get()
    @ApiTags('categories')
    async getAllProducts() {
        return await this.getCategoryUseCase.getAllCategories()
    }
}