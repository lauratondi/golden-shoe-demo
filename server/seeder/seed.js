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

    const productsCollection = client.db('categories').collection('products');

    const categories = [
      'Men',
      'Woman',
      'Sport',
      'Casual',
      'Sneaker',
      'Heels',
      'Flat',
    ];

    let products = [];
    for (let i = 0; i < categories.length; i++) {
      let newProduct = {
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        category: categories[Math.floor(Math.random() * categories.length)],
        description: faker.lorem.paragraph(),
        imgage: ' http://placeimg.com/640/480/fashion',
      };
      products.push(newProduct);

      console.log(newProduct.category);
    }
    productsCollection.insertMany(products);
    console.log('Databae seeded');
    client.close();
  } catch (err) {
    console.log(err);
  } finally {
    return;
  }
}

seedDB();
