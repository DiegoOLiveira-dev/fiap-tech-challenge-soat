import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from "./index";
import { MongoDataServicesModule } from "../../frameworks/data-services/mongo/mongo-data-services.module";
import { CategoriesController } from "./controllers/categories.controller";
import { ApplicationModule } from "../core/core.module";

@Module({
    imports: [
        forwardRef(() => ApplicationModule),
        forwardRef(() => MongoDataServicesModule)
    ],
    providers: [...ServicesOut],
    exports: [...ServicesOut],
    controllers: [CategoriesController]
})
export class AdapterModule {}