const router = require('express').Router();
const models = require('../models');
const Orders = models.Orders;

router.get("/", (req, res) => {Orders.findAll()
    .then(orders => res.send(orders))
});

router.get("/:id", (req, res) => {
  Orders.findOne({ where: { id: req.params.id }})
    .then(orders => {
      res.send(orders);
    })
});

router.post("/", (req, res) => Orders.creater(req.body)
  .then(orders => {
    res.status(201).send(orders);
  })
);

router.put("/id", (req, res) => {
  Orders.update({ ...req.body }, {where: { id: req.params.id }})
  .then(() => {
    Orders
      .findByPk(res.params.id)
      .then(orders => res.send(orders.dataValues))
  });
});

router.delete("/orders/:id", (req, res) => { Orders.destroy({ where: { id: req.params.id }})
  .then(() => res.sendStatus(200));
});

module.exports = router;