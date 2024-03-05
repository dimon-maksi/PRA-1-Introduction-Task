import express from "express";
import mongoose from "mongoose";

const PORT = 5000;
const DB_URL = "mongodb+srv://user:user@cluster0.2ulrveh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('I am alive!!')
})

async function startApp(){
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));

    } catch(e){
        console.log(e);
    }
}

startApp();