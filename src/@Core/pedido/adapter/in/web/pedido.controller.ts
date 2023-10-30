import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PedidoUseCase } from 'src/@Core/pedido/application/ports/in/pedido.use-case';
import { SavePedidoRequest } from './save-pedido.request';
import { SavePedidoCommand } from 'src/@Core/pedido/application/ports/in/save-pedido.command';

@Controller('pedido')
export class PedidoController {
    constructor(private readonly useCasePedido: PedidoUseCase) {}

    @Post()
    @ApiBody({type: SavePedidoRequest, description: 'Save Pedido Request', required: false})
    @ApiResponse({
        status: 201,
        description: 'Saved Successfully.'
    }) 
    @ApiTags('pedidos')
    @UsePipes(new ValidationPipe({transform: true}))
    save(@Body() request: SavePedidoRequest) {
        const command: SavePedidoCommand = request.toCommand();
        return this.useCasePedido.savePedido(command)
    }   

    @Get()
    @ApiTags('pedidos')
    async getAllProducts() {
        return await this.useCasePedido.getAllPedidos();
        
    }
}
