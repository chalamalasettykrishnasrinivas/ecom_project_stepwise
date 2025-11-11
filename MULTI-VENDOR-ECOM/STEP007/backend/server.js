const express = require('express');
const app = express();
require('dotenv').config();


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('<h1> welcome to E-commerce Backend Server </h1>' );
});

