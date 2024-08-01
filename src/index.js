import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('totally safe app');
});

app.listen(port, () => {
  console.log(`Hello World app listening at http://localhost:${port}`);
});
