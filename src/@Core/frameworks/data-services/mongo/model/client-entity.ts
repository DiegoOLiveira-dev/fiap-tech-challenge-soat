import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClientDocument = HydratedDocument<Client>;

@Schema()
export class Client {
    @Prop({unique: true})
    cpf_client: number;
    @Prop()
    name: string;
    @Prop({unique: true})
    email: string
}

export const ClientSchema = SchemaFactory.createForClass(Client);