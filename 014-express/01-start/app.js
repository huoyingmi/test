const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Hello World! 你好 世界'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));