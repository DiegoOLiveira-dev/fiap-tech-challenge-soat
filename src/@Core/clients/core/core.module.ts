import { Module, forwardRef } from "@nestjs/common";
import { AdapterModule } from "../adapter/adapter.module";
import { GetClientsByCpfUseCase } from "./usecases/get-clients-bycpf.use-case";
import { GetClientsUseCase } from "./usecases/get-clients.use-case";
import { SaveClientUseCase } from "./usecases/save-client.use-case";

@Module({
    imports: [
        forwardRef(() => AdapterModule),
    ],
    providers: [GetClientsByCpfUseCase, SaveClientUseCase, GetClientsUseCase],
    exports: [GetClientsByCpfUseCase, SaveClientUseCase, GetClientsUseCase],
})
export class ApplicationModule {}