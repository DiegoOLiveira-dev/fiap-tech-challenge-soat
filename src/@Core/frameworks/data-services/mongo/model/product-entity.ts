import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Category } from './category-entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: string;

  @Prop()   
  image_url: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' },)
  category: Category;

}

export const ProductSchema = SchemaFactory.createForClass(Product);