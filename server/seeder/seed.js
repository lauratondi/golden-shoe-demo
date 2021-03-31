const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

async function seedDB() {
  // Connection URL
  const uri = require('../config').mongoURI;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected correctly to server');

    const db = client.db('golden-shoe-demo');

    const productCollection = client.db('inventory').collection('products');
    // const productsMenCollection = client.db('inventory').collection('men');
    // const productsWomenCollection = client.db('inventory').collection('women');

    const types = [
      'Sport',
      'Casual',
      'Sneaker',
      'Boots',
      'Lace-Ups',
      // 'Heels',
      // 'Flat',
    ];
    const gender = ['women', 'man', 'uni-sex'];
    const name = ['Converse', 'Nike', 'Calvin Klein', 'Gucci', 'Dr. Martens'];
    const material = ['Leather', 'Textile', 'Synthetic', 'Canvas', 'Rubber'];
    let products = [];

    for (let i = 0; i < types.length; i++) {
      let newProduct = {
        name: name[Math.floor(Math.random() * name.length)],
        price: faker.commerce.price(),
        color: faker.commerce.color(),
        material: material[Math.floor(Math.random() * material.length)],
        size: Math.floor(Math.random() * (49 - 35)) + 35,
        gender: gender[Math.floor(Math.random() * gender.length)],

        type: types[Math.floor(Math.random() * types.length)],
        description: faker.lorem.paragraph(),
        image: ' http://placeimg.com/640/480/shoes',
      };
      products.push(newProduct);
    }
    // productsMenCollection.insertMany(products);
    // productsWomenCollection.insertMany(products);
    productCollection.insertMany(products);
    console.log('Database seeded');
    client.close();
  } catch (err) {
    console.log(err);
  }
}

// seedDB();
