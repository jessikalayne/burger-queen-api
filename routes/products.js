const router = require('express').Router();
const models = require('../models');
const Products = models.Products;

router.get("/", (req, res) => {
  Products.findAll()
    .then(products => {
      res.send(products);
    })
})

router.get("/:id", (req, res) => {
  Products.findOne({ where: { id: req.params.id } })
    .then(products => {
      res.send(products);
    })
})

router.post("/", (req, res) => Products.creater(req.body)
  .then(products => {
    res.status(201).send(products);
  })
);

router.put("/id", (req, res) => {
  Products.update({ ...req.body }, { where: { id: req.params.id } })
  .then(() => {
    Products
      .findByPk(res.params.id)
      .then(products => res.send(products.dataValues))
  });
});

router.delete("/product/:id", (req, res) => {
  Products.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(200));
});

module.exports = router;
