import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
