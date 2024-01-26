import { Module, forwardRef } from "@nestjs/common";
import { AdapterModule } from "../adapter/adapter.module";
import { GetProductUseCase } from "./usecases/get-product.use-case";
import { SaveProductUseCase } from "./usecases/save-product.use-case";
import { UpdateProductUseCase } from "./usecases/update-product.use-case";
import { DeleteProductUseCase } from "./usecases/delete-product.use-case";
import { GetProductCategoryUseCase } from "./usecases/get-product-by-category.use-case";

@Module({
    imports: [
        forwardRef(() => AdapterModule),
    ],
    providers: [GetProductUseCase, SaveProductUseCase, UpdateProductUseCase, DeleteProductUseCase, GetProductCategoryUseCase],
    exports: [GetProductUseCase, SaveProductUseCase, UpdateProductUseCase, DeleteProductUseCase, GetProductCategoryUseCase],
})
export class ApplicationModule {}