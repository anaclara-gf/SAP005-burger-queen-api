const express = require('express');
const userRoutes = require('./server/routes/UserRouter');
const productsRoutes = require('./server/routes/ProductRouter');
const ordersRoutes = require('./server/routes/OrderRouter');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/', userRoutes);
app.use('/', productsRoutes);
app.use('/', ordersRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})