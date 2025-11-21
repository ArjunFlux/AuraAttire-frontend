const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

const AuthRouter = require('./Routes/AuthRouter');
const AddressRouter = require('./Routes/userRoute');

const PORT = process.env.PORT || 8080;

require('./Models/db');

app.use(cors({
  origin: 'https://auraattire.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(bodyParser.json());

app.use('/auth', AuthRouter);
app.use('/address', AddressRouter); 

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
