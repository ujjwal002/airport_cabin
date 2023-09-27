const Product = require('../models/product');

exports.addProduct = async (req, res) => {
  try {

    const product = await Product.create(req.body);

    return res.status(200).json({
      success: true,
      message: "Product added successfully"
    })

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })

  }
} 