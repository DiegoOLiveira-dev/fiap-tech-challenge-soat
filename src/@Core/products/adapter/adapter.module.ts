import { Module, forwardRef } from "@nestjs/common";
import { AppModule } from "src/app.module";
import { ServicesOut } from "./out";
import { SaveProductController } from "./in/web/save-product.controller";
import { Mongoose } from "mongoose";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductEntity, ProductSchema } from "./out/product-entity";
import { ApplicationModule } from "../application/application.module";
import { SaveProductCommand } from "../application/ports/in/save-product.command";

@Module({
    imports: [
        forwardRef(() => ApplicationModule),
        MongooseModule.forFeature([{name: ProductSchema.name, schema: ProductEntity }])
    ],
    providers: [...ServicesOut],
    exports: [...ServicesOut],
    controllers: [SaveProductController]
})
export class AdapterModule {}