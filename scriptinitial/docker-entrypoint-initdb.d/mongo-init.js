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
db.createCollection('pedidos');
db.createCollection('statuspreparos');
db.createCollection('clients');
db.createCollection('payments');

//Inserindo infos na tabelas na tabelas
var categories = db.categories.insertMany([
  {
    "_id": new ObjectId("65b07ad83e02c181c35ed542"),
    "description": "Sobremesa"
  },
  {
    "_id": new ObjectId("65b07f2152d091c915af466e"),
    "description": "Acompanhamento"
  },
  {
    "_id": new ObjectId("65b07f2152d091c915af466f"),
    "description": "Lanche"
  },
  {
    "_id": new ObjectId("65b07f2152d091c915af4670"),
    "description": "Bebida"
  }
])

var products = db.products.insertMany([
  {
    "_id": new ObjectId("65b07f2152d091c915af4671"),
    "name": "Milk-Shake",
    "description": "Sorvete batido com leite",
    "price": "18",
    "image_url": "teste",
    "category": categories.insertedIds[0],
  },
  {
    "_id": new ObjectId("65b07f2152d091c915af4672"),
    "name": "Batata Frita",
    "description": "batatas fritas em oleo",
    "price": "20",
    "image_url": "teste",
    "category": categories.insertedIds[1],
  },
  {
    "_id": new ObjectId("65b07f2152d091c915af4673"),
    "name": "Hamburguer",
    "description": "pao com carne",
    "price": "35",
    "image_url": "teste",
    "category": categories.insertedIds[2],
  },
  {
    "_id": new ObjectId("65b07f2152d091c915af4674"),
    "name": "Coca cola",
    "description": "bebida",
    "price": "10",
    "image_url": "teste",
    "category": categories.insertedIds[3],
  }
])

var statuspreparo = db.statuspreparos.insertMany([
  {
    "_id": new ObjectId("65b02ea665520ae647add25e"),
    "id_status": "1",
    "Descricao": "Recebido"
  },
  {
    "_id": new ObjectId("65b02ea665520ae647add25f"),
    "id_status": "2",
    "Descricao": "em preparo"
  },
  {
    "_id": new ObjectId("65b02ea665520ae647add260"),
    "id_status": "3",
    "Descricao": "pronto"
  },
  {
    "_id": new ObjectId("65b02ea665520ae647add261"),
    "id_status": "4",
    "Descricao": "retirado"
  },
  {
    "_id": new ObjectId("65b02ea665520ae647add262"),
    "id_status": "5",
    "Descricao": "Finalizado"
  },
])

var cliente = db.clients.insertMany([
  {
    "cpf_client": 21654473057,
    "name": "Ronaldo Nazário",
    "email": "ronaldon@fake.com.br"
  },
  {
    "cpf_client": 78279389067,
    "name": "Cássio Ramos",
    "email": "cassior@fake.com.br"
  }
])

// var pedido = db.pedidos.insertMany([
//   {
//     "id_status": "1",
//     "descricao_status": "recebido",

//     "id_cliente": "1",
//     "nome_cliente": "1",
//     "produtos": [{qtd: 1, produto: products.insertedIds[0]}],
//     "total": "18",
//   }

// ])

var pedido = db.pedidos.insertMany([
  {
    "id_cliente": "1",
    "nome_cliente": "1",
    "produtos": [{ qtd: 1, produto: products.insertedIds[0] }, { qtd: 1, produto: products.insertedIds[1] }],
    "status_pagamento": "Aprovado | Reprovado",
    "status_pedido": [{
      status: statuspreparo.insertedIds[0],
      date: new Date().toString()
    }, {
      status: statuspreparo.insertedIds[1],
      date: new Date().toString()
    }, {
      status: statuspreparo.insertedIds[2],
      date: new Date().toString()
    }, {
      status: statuspreparo.insertedIds[3],
      date: new Date().toString()
    }, {
      status: statuspreparo.insertedIds[4],
      date: new Date().toString()
    }],
    date_order: new Date().toString(),
    valor_total: "28"
  }

])

