import express from "express";
import db from "../db/mongoConnect.js";

const router = express.Router();

router.get("/", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).limit(50).toArray();

    res.send(results).status(200);
});

router.post("/", async (req, res) => {
    let collection = await db.collection("users");
    const newDocument = req.body;
    console.log(newDocument);
    let result = await collection.insertOne(newDocument).catch((err) => {
        console.log(err);
        res.status(500).send("Error Adding new user");
    }); 
    res.send(result).status(204);
});


router.put("/:name", async (req, res) => {
    const  query = { _id: req.params.name };
    const update = {
        $push: {
            users: req.body
        }
    };

    let collection = await db.collection("users");
    let result = await collection.updateOne(query, update).catch((err) => {
        console.log(err);
        res.status(500).send("Error updating user");
    });
    if (!result) {
        res.status(404).send("User not found");
        return;
    }  
    res.send(result).status(200);
});

export default router;