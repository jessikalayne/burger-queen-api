'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrderProducts, {foreignKey: 'productId'})
  };

  // sequelize.sync(
  //   Products.create({
  //       name: "Café americano",
  //       price: 5
  //     }),
  //     Products.create({
  //       name: "Café com leite",
  //       price: 7
  //     }),
  //     Products.create({
  //       name: "Sanduíche de presunto e queijo",
  //       price: 10
  //     }),
  //     Products.create({
  //       name: "Suco de fruta natural",
  //       price: 7
  //     }),
  //     Products.create({
  //       name: "Hambúrguer simples",
  //       price: 10
  //     }),
  //     Products.create({
  //       name: "Hambúrguer duplo",
  //       price: 15
  //     }),
  //     Products.create({
  //       name: "Batata frita",
  //       price: 5
  //     }),
  //     Products.create({
  //       name: "Anéis de cebola",
  //       price: 5
  //     }),
  //     Products.create({
  //       name: "Água 500ml",
  //       price: 5
  //     }),
  //     Products.create({
  //       name: "Água 750ml",
  //       price: 7
  //     }),
  //     Products.create({
  //       name: "Bebida gaseificada 500ml",
  //       price: 7
  //     }),
  //     Products.create({
  //       name: "Bebida gaseificada 750ml",
  //       price: 10
  //     })
  // )
  return Products;
};