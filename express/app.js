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

const cors = require("cors") //Newly added

app.use(cors()) // Newly added


app.use(express.json({ limit: "50mb" }));

app.use(express.json());

app.use('/products', productController);

app.use(asyncHandler(authMiddleware));

app.use('/users', userController);

// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });


async function bootstrap() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('DB connected successfully.');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}

bootstrap().catch(err => console.log(err));

app.use(errorHandler);