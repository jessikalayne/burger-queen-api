const express = require("express");
const app = express();
const db = require('./models/index');


app.listen(4567, console.log("Servidor Rodando"));

app.use("./users" , require("./routes/user"));

app.use(express.json());

db.sequelize.sync();
