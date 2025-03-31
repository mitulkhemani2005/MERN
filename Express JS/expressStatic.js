const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./public'))
// app.get('/', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname,  './public/home.html'));
// });

// app.get('/about', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname,  './public/about.html'));
// });

app.get('*', (req, res) => {
    res.status(404).send('NOT FOUND');
});

app.listen(5000, () => {
    console.log(`The server has been started on port 5000`);
});
