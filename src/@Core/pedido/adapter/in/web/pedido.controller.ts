import { Body, Controller, Get, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PedidoUseCase } from 'src/@Core/pedido/application/ports/in/pedido.use-case';
import { SavePedidoRequest } from './save-pedido.request';
import { SavePedidoCommand } from 'src/@Core/pedido/application/ports/in/save-pedido.command';


@Controller('pedido')
export class PedidoController {
    constructor(private readonly useCasePedido: PedidoUseCase) { }

    @Post()
    @ApiBody({ type: SavePedidoRequest, description: 'Save Pedido Request', required: false })
    @ApiResponse({
        status: 201,
        description: 'Saved Successfully.'
    })
    @ApiTags('pedidos')
    @UsePipes(new ValidationPipe({ transform: true }))
    async save(@Body() request: SavePedidoRequest) {

        let req = Object(request)
        let command: SavePedidoCommand = req.toCommand();
        return this.useCasePedido.savePedido(command)
    }
    @Patch()
    @ApiTags('pedidos')
    async updateStatus(@Body() request: any) {
        let pedidoAtualizado = await this.useCasePedido.updateStatusPedido(request);
        return pedidoAtualizado
    }

    @Get("todos")
    @ApiTags('pedidos')
    async getAllProducts() {
        let pedidos = await this.useCasePedido.getAllPedidos();
        return pedidos
    }


}
