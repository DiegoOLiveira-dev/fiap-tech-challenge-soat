import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SavePaymentCommand } from "../../../application/ports/in/payment.command";
import { SavePaymentUseCase } from "../../../application/ports/in/payment.use-case";
import { SavePaymentRequest } from "./payment.request";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('payments')
export class SavePaymentController {
    constructor(
        private readonly savePaymentUseCase: SavePaymentUseCase,
    ) {}

    @Post()
    @ApiBody({type: SavePaymentRequest, description: 'Save Payment Request', required: false})
    @ApiResponse({
        status: 201,
        description: 'Saved Successfully.'
    }) 
    @ApiTags('payments')
    @UsePipes(new ValidationPipe({transform: true}))

    save(@Body() request: SavePaymentRequest) {          
        const command: SavePaymentCommand = request.toCommand();
        return this.savePaymentUseCase.savePayment(command)
    }

    @Get()
    @ApiTags('payments')
    async getAllPayments() {
        return await this.savePaymentUseCase.getAllPayments()
    }

    @Get('id_order')
    @ApiTags('payments')
    async getOrderById(@Query() query) {
        return await this.savePaymentUseCase.getOrderById(query.id_order)
    }

    @Patch(':id')
    @ApiTags('payments')
    @UsePipes(new ValidationPipe({transform: true}))
    updateOrderById(@Param('id') itemID, @Query('status') statusPayment) {
        return this.savePaymentUseCase.updateOrderById(itemID, statusPayment)
    }
}