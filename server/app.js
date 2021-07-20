const express = require("express")
const cors = require ('cors')

const PORT = 8081

const app = express()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.listen(PORT, () => console.log("Server starts", PORT));
