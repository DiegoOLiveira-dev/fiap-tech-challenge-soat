import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from "./out";
import { ApplicationModule } from "../application/application.module";
import { MongoDataServicesModule } from "src/@Core/frameworks/data-services/mongo/mongo-data-services.module";
import { SavePaymentController } from "./in/web/payment.controller";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [
        forwardRef(() => ApplicationModule),
        forwardRef(() => MongoDataServicesModule),
        HttpModule
    ],
    providers: [...ServicesOut],
    exports: [...ServicesOut],
    controllers: [SavePaymentController]
})
export class AdapterModule {}