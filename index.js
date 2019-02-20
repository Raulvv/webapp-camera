import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
