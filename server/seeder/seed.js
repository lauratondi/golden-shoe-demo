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

    const productsMenCollection = client.db('products').collection('men');
    const productsWomenCollection = client.db('products').collection('women');

    const types = ['Sport', 'Casual', 'Sneaker', 'Heels', 'Flat'];

    let products = [];

    for (let i = 0; i < types.length; i++) {
      let newProduct = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        color: faker.commerce.color(),
        material: faker.commerce.productMaterial(),
        size: Math.floor(Math.random() * (49 - 35)) + 35,
        type: types[Math.floor(Math.random() * types.length)],
        description: faker.lorem.paragraph(),
        image: ' http://placeimg.com/640/480/shoes',
      };
      products.push(newProduct);

      console.log(newProduct.size);
    }
    productsMenCollection.insertMany(products);
    productsWomenCollection.insertMany(products);
    console.log('Database seeded');
    client.close();
  } catch (err) {
    console.log(err);
  }
}

seedDB();
