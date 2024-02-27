import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SavePaymentCommand } from "../../base/interfaces/payment.command";
import { SavePaymentRequest } from "../../base/interfaces/payment.request";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdatePaymentUseCase } from "../../core/usecases/update-payment.use-case";
import { GetPaymentByIdUseCase } from "../../core/usecases/get-payment-byID.use-case";
import { GetPaymentUseCase } from "../../core/usecases/get-payment.use-case";
import { SavePaymentUseCase } from "../../core/usecases/save-payment.use-case";

@Controller('payments')
export class SavePaymentController {
    constructor(
        private readonly savePaymentUseCase: SavePaymentUseCase,
        private readonly getPaymentUseCase: GetPaymentUseCase,
        private readonly getPaymentByIdUseCase: GetPaymentByIdUseCase,
        private readonly updatePaymentUseCase: UpdatePaymentUseCase,

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
        return await this.getPaymentUseCase.getAllPayments()
    }

    @Get('id_order')
    @ApiTags('payments')
    async getOrderById(@Query() query) {
        return await this.getPaymentByIdUseCase.getOrderById(query.id_order)
    }

    @Patch(':id')
    @ApiTags('payments')
    @UsePipes(new ValidationPipe({transform: true}))
    updateOrderById(@Param('id') itemID, @Query('status') statusPayment) {
        return this.updatePaymentUseCase.updateOrderById(itemID, statusPayment)
    }
}