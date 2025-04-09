import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import users from "./routes/users.js";
import movies from "./routes/movies.js"


const app = express();
app.use(cors());


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the MERN Test API for Movie Lovers",
        status: "success"
    })
})

app.use("/users", users);
app.use("/movies", movies);

dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {    
    console.log(`Server is running on port ${PORT}`);
}
);

export default app;