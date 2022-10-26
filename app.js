require("dotenv/config")
const express = require("express");
const conn = require("./database/database")
lUrlRouter=require("./routers/lUrlRouter");
sUrlRouter=require("./routers/sUrlRouter")

const PORT = process.env.PORT||5000;
const app = express();

conn();

app.use(express.json());

app.use("/",lUrlRouter);
app.use("/url",sUrlRouter);

app.get("/",)

app.listen(PORT, ()=>{
    console.log(`Ready on http://localhost:${PORT}`);
});