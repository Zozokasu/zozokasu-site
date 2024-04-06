const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('<h1>ぞぞかす</h1>');
});

app.listen(port, () => {
    console.log(`[server]: Server is running on port ${port}`);
});