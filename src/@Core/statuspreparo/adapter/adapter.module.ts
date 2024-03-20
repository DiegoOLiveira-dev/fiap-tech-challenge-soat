import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from ".";
import { SaveStatusPreparoController } from "./controllers/statuspreparo.controller";
import { ApplicationModule } from "../core/application.module";
import { MongoDataServicesModule } from "../../frameworks/data-services/mongo/mongo-data-services.module";

@Module({
    imports: [
        forwardRef(() => ApplicationModule),
        forwardRef(() => MongoDataServicesModule)
    ],
    providers: [...ServicesOut],
    exports: [...ServicesOut],
    controllers: [SaveStatusPreparoController]
})
export class AdapterModule { }