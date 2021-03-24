const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

async function seedDB() {
  // Connection URL
  const uri =
    'mongodb+srv://lauramars85:goldenshoe@cluster0.qz9z6.mongodb.net/golden-shoe-demo?retryWrites=true&w=majority';

  // const dbName = 'golden-shoe-demo';

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected correctly to server');

    const db = client.db('golden-shoe-demo');
    // const productsCollection = db.collection('products');

    const productsMenCollection = client.db('men').collection('products');
    const productsWomenCollection = client.db('women').collection('products');

    const types = ['Sport', 'Casual', 'Sneaker', 'Heels', 'Flat'];

    let products = [];
    for (let i = 0; i < types.length; i++) {
      let newProduct = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        color: faker.commerce.color(),
        type: types[Math.floor(Math.random() * types.length)],
        description: faker.lorem.paragraph(),
        image: ' http://placeimg.com/640/480/fashion',
      };
      products.push(newProduct);

      console.log(newProduct.type);
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
