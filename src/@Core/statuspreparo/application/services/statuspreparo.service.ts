import { Injectable } from "@nestjs/common";
import { SaveStatusPreparoUseCase } from "../ports/in/statuspreparo.use-case";
import { StatusPreparoPersistencePort } from "../ports/out/statuspreparo-persistente.port";
import { StatusPreparo } from "../../domain/StatusPreparo";
import { SaveStatusPreparoCommand } from "../ports/in/statuspreparo.command";

@Injectable()
export class SaveStatusPreparoService implements SaveStatusPreparoUseCase {
    constructor(private StatusPreparoPersistencePort: StatusPreparoPersistencePort) { }

    //     async saveProduct(command: SaveProductCommand): Promise<void> {
    //         try {
    //             const product: Product = {
    //                 name: command.name,
    //                 description: command.description,
    //                 category: command.category,
    //                 image_url: command.image_url,
    //                 price: command.price,
    //             };
    //             await this.productPersistencePort.persistProduct(product)
    //         } catch (error) {
    //             throw error;
    //         }

    //     }

    async getAllStatusPreparos(): Promise<StatusPreparo[]> {

        return await this.StatusPreparoPersistencePort.getAllStatusPreparo()

    }

    //     async getProductsByCategory(id?: number): Promise<Product[]> {
    //         const filter = { category: id }
    //         return await this.productPersistencePort.getProductsByCategory(filter)
    //     }

    //     async deleteProductById(id: number): Promise<Product> {
    //         return await this.productPersistencePort.deleteProductById(id)
    //     }

    //     async updateProductById(id: number, command: SaveProductCommand): Promise<Product> {
    //         return await this.productPersistencePort.updateProductById(id, command)
    //     }


}