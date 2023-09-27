const { DataTypes } = require('sequelize');

const sequelize = require("../config/database");

const Product = sequelize.define('Product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productQuantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  marketPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  estimatedShippingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  seller: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;


