const express = require("express");
const asyncHandler = require("express-async-handler");
const errorHandler = require('./common/middlewares/error-handler.middleware');
const authMiddleware = require('./common/middlewares/authorization.middleware');
const userController = require('./users/users.controller');
const productController = require('./products/products.controller');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

dotenv.config();

const cors = require("cors") 
app.use(cors()) 

app.use(express.json({ limit: "50mb" }));

app.use(express.json());

app.use(asyncHandler(authMiddleware));

app.use('/users', userController);

app.use('/products', productController);

async function bootstrap() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connected successfully.');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

bootstrap().catch(err => console.log(err));

app.use(errorHandler);