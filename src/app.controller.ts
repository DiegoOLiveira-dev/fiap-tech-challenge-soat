import { ApiTags } from '@nestjs/swagger';
import { Controller, Post } from '@nestjs/common';
import { IDataServices } from './@Core/abstracts';

@Controller('carga')
export class AppController {
  constructor(private dataServices: IDataServices) { }

  @Post()
  @ApiTags('cargas iniciais')
  async getHello(): Promise<any> {

    const catrgories = [
      {
        "description": "Sobremesa"
      },
      {
        "description": "Acompanhamento"
      },
      {
        "description": "Lanche"
      },
      {
        "description": "Bebida"
      }
    ]
    const createdCategory = await this.dataServices.categories.createMany(catrgories);

    const products = [
      {
        "name": "Milk-Shake",
        "description": "Sorvete batido com leite",
        "price": "18",
        "image_url": "teste",
        "category": createdCategory[0]._id,
        "qtde": 1
      },
      {
        "name": "Batata Frita",
        "description": "batatas fritas em oleo",
        "price": "20",
        "image_url": "teste",
        "category": createdCategory[1]._id,
        "qtde": 1
      },
      {
        "name": "Hamburguer",
        "description": "pao com carne",
        "price": "35",
        "image_url": "teste",
        "category": createdCategory[2]._id,
        "qtde": 1
      },
      {
        "name": "Coca cola",
        "description": "bebida",
        "price": "10",
        "image_url": "teste",
        "category": createdCategory[3]._id,
        "qtde": 1
      }
    ]

    const createdProducts = await this.dataServices.products.createMany(products);


    return createdProducts;
  }
}
