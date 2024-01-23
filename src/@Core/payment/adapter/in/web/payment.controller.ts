import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SavePaymentCommand } from "../../../application/ports/in/payment.command";
import { SavePaymentUseCase } from "../../../application/ports/in/payment.use-case";
import { SavePaymentRequest } from "./payment.request";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpService } from '@nestjs/axios';



@Controller('payments')
export class SavePaymentController {
    constructor(
        private readonly savePaymentUseCase: SavePaymentUseCase,
        private readonly http: HttpService
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
        const response = this.http.post(`https://eo47ucxze59l6d1.m.pipedream.net?id_client=${request.id_client}&id_order=${request.id_order}`, {

        });
        console.log(response)
          
        const command: SavePaymentCommand = request.toCommand();
        return this.savePaymentUseCase.savePayment(command)
    }

    @Get()
    @ApiTags('payments')
    async getAllPayments() {
        return await this.savePaymentUseCase.getAllPayments()
    }
}