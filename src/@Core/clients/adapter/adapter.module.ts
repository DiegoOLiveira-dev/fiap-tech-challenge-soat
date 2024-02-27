import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from ".";
import { ApplicationModule } from "../core/core.module";
import { MongoDataServicesModule } from "src/@Core/frameworks/data-services/mongo/mongo-data-services.module";
import { SaveClientController } from "./controllers/client.controller";

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