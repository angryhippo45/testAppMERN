import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Movies route");
});

export default router;

