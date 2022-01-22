const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5000;

app.use(cors());
app.use(express());

// ROUTES //

// get all bucket list


// get a certain bucket


// post a bucket


// modify a bucket


// delete a bucket





app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})