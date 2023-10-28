db.createUser(
  {
    user: "admin",
    pwd: "pass",
    roles: [
      {
        role: "readWrite",
        db: "fiap"
      }
    ]
  }
);

//CRIACAODASTABELAS
db = db.getSiblingDB('fiap');
db.createCollection('categories');
db.createCollection('products');
db.createCollection('pedido');
db.createCollection('statuspreparo');
db.createCollection('client');

//Inserindo infos na tabelas na tabelas
var categories = db.categories.insertMany([
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
])

var products = db.products.insertMany([
  {
    "name": "Milk-Shake",
    "description": "Sorvete batido com leite",
    "price": "18",
    "image_url": "teste",
    "category": categories.insertedIds[0]
  },
  {
    "name": "Batata Frita",
    "description": "batatas fritas em oleo",
    "price": "20",
    "image_url": "teste",
    "category": categories.insertedIds[1]
  },
  {
    "name": "Hamburguer",
    "description": "pao com carne",
    "price": "35",
    "image_url": "teste",
    "category": categories.insertedIds[2]
  },
  {
    "name": "Coca cola",
    "description": "bebida",
    "price": "10",
    "image_url": "teste",
    "category": categories.insertedIds[3]
  }
])

var statuspreparo = db.status.insertMany([
  {
    "id_status": "1",
    "Descricao": "Recebido"
  },
  {
    "id_status": "2",
    "Descricao": "em preparo"
  },
  {
    "id_status": "3",
    "Descricao": "pronto"
  },
  {
    "id_status": "4",
    "Descricao": "retirado"
  },
])

var cliente = db.client.insertMany([
  {
    "id_cliente": 1,
    "name": "Ronaldo Nazário",
    "email": "ronaldon@fake.com.br"
  }
])

var pedido = db.pedido.insertMany([
  {
    "id_status": "1",
    "id_cliente": "1",
    "id_pedido": "1",
    "name_produto": "Milk-Shake"
  }
])

