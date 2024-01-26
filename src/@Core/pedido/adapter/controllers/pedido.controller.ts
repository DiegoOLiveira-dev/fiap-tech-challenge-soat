import { Body, Controller, Get, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SavePedidoRequest } from '../../base/interfaces/save-pedido.request';
import { SavePedidoCommand } from 'src/@Core/pedido/base/interfaces/save-pedido.command';
import { GetPedidoUseCase } from '../../core/usecases/get-pedido.use-case';
import { UpdatePedidoUseCase } from '../../core/usecases/update-pedido.use-case';
import { SavePedidoUseCase } from '../../core/usecases/save-pedido.use-case';


@Controller('pedido')
export class PedidoController {
    constructor(
        private readonly getPedidoUseCase: GetPedidoUseCase,
        private readonly updatePedidoUseCase: UpdatePedidoUseCase,
        private readonly savePedidoUseCase: SavePedidoUseCase,
        ) { }

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
        return this.savePedidoUseCase.savePedido(command)
    }
    @Patch()
    @ApiTags('pedidos')
    async updateStatus(@Body() request: any) {
        let pedidoAtualizado = await this.updatePedidoUseCase.updateStatusPedido(request);
        return pedidoAtualizado
    }

    @Get("todos")
    @ApiTags('pedidos')
    async getAllProducts() {
        let pedidos = await this.getPedidoUseCase.getAllPedidos();
        return pedidos
    }


}
