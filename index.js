const express = require("express")
const app = express()

const urlRoute = require('./routes/url')
const PORT = 7001;

app.use("/url", urlRoute);

app.listen(PORT, () => console.log("Server Started"));