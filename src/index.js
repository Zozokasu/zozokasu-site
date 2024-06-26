const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`[server]: Server is running on port ${port}`);
});