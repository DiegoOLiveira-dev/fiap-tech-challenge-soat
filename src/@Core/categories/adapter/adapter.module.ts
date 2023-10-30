import { Module, forwardRef } from "@nestjs/common";
import { ServicesOut } from "./out";
import { ApplicationModule } from "../application/application.module";
import { MongoDataServicesModule } from "../../frameworks/data-services/mongo/mongo-data-services.module";
import { CategoriesController } from "./in/web/categories.controller";

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