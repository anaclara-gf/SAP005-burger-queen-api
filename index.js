const express = require('express');
const userRoutes = require('./server/routes/UserRouter');
const productsRoutes = require('./server/routes/ProductRouter');
const ordersRoutes = require('./server/routes/OrderRouter');
const authRoutes = require('./server/routes/AuthRouter');
const app = express();
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger.json')

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/', userRoutes);
app.use('/', productsRoutes);
app.use('/', ordersRoutes);
app.use('/', authRoutes);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((err,req,res,next) => {
  const { status, message } = err;
    res.status(status).json({
      status,
      message
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})