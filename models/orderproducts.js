'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderProducts = sequelize.define('OrderProducts', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  OrderProducts.associate = function(models) {
    OrderProducts.belongsTo(models.Products, {foreignKey: 'productId'})
    OrderProducts.belongsTo(models.Orders, {foreignKey: 'orderId'})
  };
  return OrderProducts;
};