import { Module, forwardRef } from "@nestjs/common";
import { AdapterModule } from "../adapter/adapter.module";
import { GetPedidoUseCase } from "./usecases/get-pedido.use-case";
import { SavePedidoUseCase } from "./usecases/save-pedido.use-case";
import { UpdatePedidoUseCase } from "./usecases/update-pedido.use-case";
import { GetSelectedProductUseCase } from "./usecases/get-selected-product.use-case";
import { GetPedidoByIdUseCase } from "./usecases/get-pedido-by-id.use-case";

@Module({
    imports: [
        forwardRef(() => AdapterModule),
    ],
    providers: [GetPedidoUseCase, SavePedidoUseCase, UpdatePedidoUseCase, GetSelectedProductUseCase, GetPedidoByIdUseCase],
    exports: [GetPedidoUseCase, SavePedidoUseCase, UpdatePedidoUseCase, GetSelectedProductUseCase, GetPedidoByIdUseCase],
})
export class ApplicationModule {}