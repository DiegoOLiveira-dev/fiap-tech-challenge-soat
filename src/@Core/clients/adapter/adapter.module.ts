import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from "./out";
import { ApplicationModule } from "../application/application.module";
import { MongoDataServicesModule } from "src/@Core/frameworks/data-services/mongo/mongo-data-services.module";
import { SaveClientController } from "./in/web/client.controller";

@Module({
    imports: [
        forwardRef(() => ApplicationModule),
        forwardRef(() => MongoDataServicesModule)
    ],
    providers: [...ServicesOut],
    exports: [...ServicesOut],
    controllers: [SaveClientController]
})
export class AdapterModule {}