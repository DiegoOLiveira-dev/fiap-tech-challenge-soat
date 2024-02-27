import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from ".";
import { SaveProductController } from "./controllers/product.controller";
import { ApplicationModule } from "../core/application.module";
import { MongoDataServicesModule } from "src/@Core/frameworks/data-services/mongo/mongo-data-services.module";

@Module({
    imports: [
        forwardRef(() => ApplicationModule),
        forwardRef(() => MongoDataServicesModule)
    ],
    providers: [...ServicesOut],
    exports: [...ServicesOut],
    controllers: [SaveProductController]
})
export class AdapterModule {}