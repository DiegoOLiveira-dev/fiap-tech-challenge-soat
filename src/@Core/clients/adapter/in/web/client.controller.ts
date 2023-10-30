import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SaveClientCommand } from "../../../application/ports/in/client.command";
import { SaveClientUseCase } from "../../../application/ports/in/client.use-case";
import { SaveClientRequest } from "./client.request";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('clients')
export class SaveClientController {
    constructor(private readonly saveClientUseCase: SaveClientUseCase) {}

    @Post()
    @ApiBody({type: SaveClientRequest, description: 'Save Client Request', required: false})
    @ApiResponse({
        status: 201,
        description: 'Saved Successfully.'
    }) 
    @ApiTags('clients')
    @UsePipes(new ValidationPipe({transform: true}))
    save(@Body() request: SaveClientRequest) {
        const command: SaveClientCommand = request.toCommand();
        return this.saveClientUseCase.saveClient(command)
    }

    @Get()
    @ApiTags('clients')
    async getAllClients() {
        return await this.saveClientUseCase.getAllClients()
    }
    
    @Get('filterbycpf')
    @ApiTags('clients')
    async getClientByCPF(@Query() query) {
        return await this.saveClientUseCase.getClientByCPF(query.cpf_client)
    }

}