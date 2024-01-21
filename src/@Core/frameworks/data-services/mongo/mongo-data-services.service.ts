import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IDataServices } from "../../../abstracts/data-services.abstract";
import { MongoGenericRepository } from "./mongo-generic-repository";
import { Product, ProductDocument } from "./model/product-entity";
import { Category, CategoryDocument } from "./model/category-entity";
import { Client } from "src/@Core/clients/domain/Client";
import { ClientDocument } from "./model/client-entity";

import { Pedido, PedidoDocument } from "./model/pedido-entity";
import { StatusPreparo, StatusPreparoDocument } from "./model/statuspreparo-entity";

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap {
  products: MongoGenericRepository<Product>;
  categories: MongoGenericRepository<Category>;
  clients: MongoGenericRepository<Client>;
  pedido: MongoGenericRepository<Pedido>;
  statuspreparo: MongoGenericRepository<StatusPreparo>;

  constructor(
    @InjectModel(Product.name)
    private ProductRepository: Model<ProductDocument>,
    @InjectModel(Category.name)
    private CategoryRepository: Model<CategoryDocument>,
    @InjectModel(Client.name)
    private ClientRepository: Model<ClientDocument>,
    @InjectModel(Pedido.name)
    private PedidoRepository: Model<PedidoDocument>,
    @InjectModel(StatusPreparo.name)
    private StatusPreparoDocumentRepository: Model<StatusPreparoDocument>
  ) { }

  onApplicationBootstrap() {
    this.products = new MongoGenericRepository<Product>(
      this.ProductRepository,
      { path: "category" }
    );
    this.categories = new MongoGenericRepository<Category>(
      this.CategoryRepository
    );
    this.statuspreparo = new MongoGenericRepository<StatusPreparo>(
      this.StatusPreparoDocumentRepository
    );
    this.clients = new MongoGenericRepository<Client>(this.ClientRepository);
    this.pedido = new MongoGenericRepository<Pedido>(this.PedidoRepository, [{
      path: "produtos",
      populate: {
        path: "produto",
        model: "Product",
      },
    }, {
      path: "status_pedido",
      populate: {
        path: "status",
        model: "StatusPreparo",
      },
    }]);
  }
}
