db.createUser(
    {
        user: "admin",
        pwd: "pass",
        roles: [
            {
                role: "readWrite",
                db: "sample_db"
            }
        ]
    }
);

db = db.getSiblingDB('sample_db');

db.createCollection('sample_collection');

db.createCollection('categories');
db.createCollection('products');

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

console.log("TESTE DIEGO",JSON.stringify(categories.insertedIds[0]))

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


db.sample_collection.insertMany([
    {
        org: 'helpdev',
        filter: 'EVENT_A',
        addrs: 'http://rest_client_1:8080/wh'
    },
    {
        org: 'helpdev',
        filter: 'EVENT_B',
        addrs: 'http://rest_client_2:8081/wh'
    },
    {
        org: 'github',
        filter: 'EVENT_C',
        addrs: 'http://rest_client_3:8082/wh'
    }
]);