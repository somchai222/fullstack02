require("dotenv").config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello somchai engineer! 111');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
