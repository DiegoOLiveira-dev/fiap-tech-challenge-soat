import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './@Core/products/products.module';
import { CategoriesModule } from './@Core/categories/categories.module';

@Module({
  imports: [forwardRef(() => ProductsModule),forwardRef(() => CategoriesModule)],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
