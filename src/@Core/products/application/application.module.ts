import { Module, forwardRef } from "@nestjs/common";
import { AppModule } from "src/app.module";
import { Services } from "./services";
import { AdapterModule } from "../adapter/adapter.module";
import { SaveProductCommand } from "./ports/in/save-product.command";

@Module({
    imports: [
        forwardRef(() => AdapterModule),
    ],
    providers: [...Services, SaveProductCommand],
    exports: [...Services, SaveProductCommand],
})
export class ApplicationModule {}