const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const cookieParser = require('cookie-parser');


app.use(cors({
    origin: ['http://localhost:5173'],
    credentials : true,
}))

app.use(bodyParser.json());
app.use(cookieParser());


app.use('/api',require('./routes/authRoutes'));
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('<h1> welcome to E-commerce Backend Server </h1>' );
});

