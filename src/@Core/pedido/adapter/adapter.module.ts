import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from ".";
import { ApplicationModule } from "../core/application.module";
import { MongoDataServicesModule } from "../../frameworks/data-services/mongo/mongo-data-services.module";
import { PedidoController } from "./controllers/pedido.controller";

@Module({
    imports: [
        forwardRef(() => ApplicationModule),
        forwardRef(() => MongoDataServicesModule)
    ],
    providers: [...ServicesOut],
    exports: [...ServicesOut],
    controllers: [PedidoController]
})
export class AdapterModule {}