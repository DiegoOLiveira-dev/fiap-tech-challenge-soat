import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from "./out";
import { SaveProductController } from "./in/web/save-product.controller";
import { ApplicationModule } from "../application/application.module";
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