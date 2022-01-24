const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");

const PORT = 5000;

app.use(cors());
app.use(express.json());

// ROUTES //

// get bucket list
app.get("/list", async(req, res) => {
    try {
        const bucketList = await pool.query(
            `SELECT * FROM bucket_list`
        )
        res.json(bucketList.rows);
    } catch (err) {
        console.error(err.message);
    }
})

// get a bucket
app.get("/list/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const bucket = await pool.query(
            `SELECT * FROM bucket_list
            WHERE id = $1`,
            [id]
        );
        res.json(bucket.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

// update a bucket
app.put("/list/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await pool.query(
            `UPDATE bucket_list 
            SET description = $1
            WHERE id = $2`,
            [description, id]
        )
        res.json('The bucket was successfully updated!')
    } catch (err) {
        console.error(err.message);
    }
})

// create a bucket
app.post("/list", async(req, res) => {
    try {
        const { description } = req.body;
        const newBucket = await pool.query(
            `INSERT INTO bucket_list (description)
            VALUES ($1) RETURNING *`,
            [description]
        );
        res.json(newBucket.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})


// delete a bucket
app.delete("/list/:id", async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query(
            `DELETE FROM bucket_list
            WHERE id = $1`,
            [id]
        );
        res.json('The bucket was successfully deleted!')
    } catch (err) {
        console.error(err.message);
    }
})



app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})