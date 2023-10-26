import { Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PedidoUseCase } from 'src/@Core/pedido/application/ports/in/pedido.use-case';

@Controller('pedido')
export class PedidoController {

    constructor(private readonly useCasePedido: PedidoUseCase) {}


    @Get()
    @ApiTags('todosospedido')
    async getAllProducts() {
        return this.useCasePedido.getAllPedidos();
        
    }

  
}
