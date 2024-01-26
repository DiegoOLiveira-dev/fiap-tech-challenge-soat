import { Module, forwardRef } from "@nestjs/common";
import { AdapterModule } from "../adapter/adapter.module";
import { GetPaymentByIdUseCase } from "./usecases/get-payment-byID.use-case";
import { GetPaymentUseCase } from "./usecases/get-payment.use-case";
import { SavePaymentUseCase } from "./usecases/save-payment.use-case";
import { UpdatePaymentUseCase } from "./usecases/update-payment.use-case";

@Module({
    imports: [
        forwardRef(() => AdapterModule),
    ],
    providers: [GetPaymentByIdUseCase, GetPaymentUseCase, SavePaymentUseCase, UpdatePaymentUseCase],
    exports: [GetPaymentByIdUseCase, GetPaymentUseCase, SavePaymentUseCase, UpdatePaymentUseCase],
})
export class ApplicationModule {}