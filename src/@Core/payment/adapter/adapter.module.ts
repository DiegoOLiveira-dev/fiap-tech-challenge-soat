import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from ".";
import { PaymentApplicationModule } from "../core/core.module";
import { MongoDataServicesModule } from "src/@Core/frameworks/data-services/mongo/mongo-data-services.module";
import { SavePaymentController } from "./controllers/payment.controller";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [
        forwardRef(() => PaymentApplicationModule),
        forwardRef(() => MongoDataServicesModule),
        HttpModule
    ],
    providers: [...ServicesOut],
    exports: [...ServicesOut],
    controllers: [SavePaymentController]
})
export class AdapterModule {}