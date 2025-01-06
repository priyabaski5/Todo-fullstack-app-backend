const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/TodoRouter');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.Mongodb_URL)
    .then(()=>console.log(`Connected to mongodb...`))
    .catch((err)=>console.log(err));

app.use(routes);
app.listen(PORT,()=> console.log(`Listening to PORT: ${PORT}`));