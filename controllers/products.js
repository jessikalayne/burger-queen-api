const models = require('../models');
const Orders = models.Orders;
const OrderProducts = models.OrderProducts;
const Products = models.Products;
const User = models.User;




module.exports = {
  getOrders,
  getOrdersById,
  postOrders,
  putOrders,
  deleteOrders
}