import { Module, forwardRef } from "@nestjs/common";
import { AdapterModule } from "../adapter/adapter.module";
import { SaveStatusPreparoUseCase } from "./usecases/statuspreparo.use-case";

@Module({
    imports: [
        forwardRef(() => AdapterModule),
    ],
    providers: [SaveStatusPreparoUseCase],
    exports: [SaveStatusPreparoUseCase],
})
export class ApplicationModule {}