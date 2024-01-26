import { Module, forwardRef } from "@nestjs/common";
import { AdapterModule } from "../adapter/adapter.module";
import { GetCategoryService } from "./usecases/get-categories.use-case";
import { SaveCategoryService } from "./usecases/save-category.use-case";

@Module({
    imports: [
        forwardRef(() => AdapterModule),
    ],
    providers: [GetCategoryService, SaveCategoryService],
    exports: [GetCategoryService, SaveCategoryService],
})
export class ApplicationModule {}