import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res, UsePipes, ValidationPipe } from "@nestjs/common";
import { SaveClientCommand } from "../../base/interfaces/client.command";
import { SaveClientRequest } from "../../base/interfaces/client.request";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { SaveClientUseCase } from "../../core/usecases/save-client.use-case";
import { GetClientsByCpfUseCase } from "../../core/usecases/get-clients-bycpf.use-case";
import { GetClientsUseCase } from "../../core/usecases/get-clients.use-case";

@Controller('clients')
export class SaveClientController {
    constructor(private readonly saveClientUseCase: SaveClientUseCase, private readonly getClinetsByCpfUseCase: GetClientsByCpfUseCase,private readonly  getClientsUseCase: GetClientsUseCase ) {}

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
        return await this.getClientsUseCase.getAllClients()
    }
    
    @Get('filterbycpf')
    @ApiTags('clients')
    async getClientByCPF(@Query() query) {
        return await this.getClinetsByCpfUseCase.getClientByCPF(query.cpf_client)
    }

}