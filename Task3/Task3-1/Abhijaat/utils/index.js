import express from 'express';

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('<h1> Hello, World! </h1>');
});

app.get('/home', (req, res) => {
    res.send('<h1> Hello, I am home </h1>');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});