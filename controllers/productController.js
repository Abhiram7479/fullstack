// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const Product = require('../models/Product');

// Insert sample products
exports.insertSamples = async (req, res) => {
  await Product.deleteMany({});
  await Product.insertMany([
    {
      name: "Running Shoes",
      price: 120,
      category: "Footwear",
      variants: [
        { color: "Red", size: "M", stock: 10 },
        { color: "Blue", size: "L", stock: 5 }
      ]
    },
    {
      name: "Winter Jacket",
      price: 200,
      category: "Apparel",
      variants: [
        { color: "Black", size: "S", stock: 8 },
        { color: "Gray", size: "M", stock: 12 }
      ]
    },
    {
      name: "Smartphone",
      price: 699,
      category: "Electronics",
      variants: []
    }
  ]);
  res.send('Sample products inserted');
};

// Get all products
exports.getAll = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Get products by category
exports.getByCategory = async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  res.json(products);
};

// Get products by variant color
exports.getByColor = async (req, res) => {
  const products = await Product.find({ "variants.color": req.params.color });
  res.json(products);
};
