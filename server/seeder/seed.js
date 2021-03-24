const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

async function seedDB() {
  // Connection URL
  const uri = require('../config').mongoURI;
  // 'mongodb+srv://lauramars85:goldenshoe@cluster0.qz9z6.mongodb.net/golden-shoe-demo?retryWrites=true&w=majority';

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected correctly to server');

    const db = client.db('golden-shoe-demo');

    const productsMenCollection = client.db('men').collection('products');
    const productsWomenCollection = client.db('women').collection('products');

    const types = ['Sport', 'Casual', 'Sneaker', 'Heels', 'Flat'];

    let products = [];

    for (let i = 0; i < types.length; i++) {
      let newProduct = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        color: faker.commerce.color(),
        material: faker.commerce.productMaterial(),
        type: types[Math.floor(Math.random() * types.length)],
        description: faker.lorem.paragraph(),
        image: ' http://placeimg.com/640/480/shoes',
      };
      products.push(newProduct);

      console.log(newProduct.material);
    }
    productsMenCollection.insertMany(products);
    productsWomenCollection.insertMany(products);
    console.log('Databae seeded');
    client.close();
  } catch (err) {
    console.log(err);
  }
}

seedDB();
