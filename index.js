const express = require('express');
const userRoutes = require('./server/routes/UserRouter');
const productsRoutes = require('./server/routes/ProductRouter');
const ordersRoutes = require('./server/routes/OrderRouter');
const authRoutes = require('./server/routes/AuthRouter');
const app = express();
const port = process.env.PORT || 3000;
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Acka Burger System API",
      description: "API for the Acka Burger's restaurant system",
      contact: {
        name: "Ana Clara"
      },
      servers: ["https://ackaburger-api.herokuapp.com"]
    }
  },
  apis: ["index.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

app.use('/', userRoutes);
app.use('/', productsRoutes);
app.use('/', ordersRoutes);
app.use('/', authRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})