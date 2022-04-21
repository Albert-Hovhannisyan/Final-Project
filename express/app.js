const express = require("express");
const asyncHandler = require("express-async-handler");
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});