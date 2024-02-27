import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SavePedidoRequest } from '../../base/interfaces/save-pedido.request';
import { SavePedidoCommand } from 'src/@Core/pedido/base/interfaces/save-pedido.command';
import { GetPedidoUseCase } from '../../core/usecases/get-pedido.use-case';
import { UpdatePedidoUseCase } from '../../core/usecases/update-pedido.use-case';
import { SavePedidoUseCase } from '../../core/usecases/save-pedido.use-case';
import { GetPedidoByIdUseCase } from '../../core/usecases/get-pedido-by-id.use-case';


@Controller('pedido')
export class PedidoController {
    constructor(
        private readonly getPedidoUseCase: GetPedidoUseCase,
        private readonly updatePedidoUseCase: UpdatePedidoUseCase,
        private readonly savePedidoUseCase: SavePedidoUseCase,
        private readonly getPedidoByIdUseCase: GetPedidoByIdUseCase,
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

    @Get()
    @ApiTags('pedidos')
    async getAllProducts() {
        let pedidos = await this.getPedidoUseCase.getAllPedidos();
        return pedidos
    }

    @Get(":id")
    @ApiTags('pedidos')
    async getSpecificOrder(@Param('id') id: string) {
        let pedido = await this.getPedidoByIdUseCase.getSelectedOrder({ _id: id });
        return pedido
    }


}
