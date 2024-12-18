
import express from 'express';
import Config from './config';

const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!' + Config.env.PORT);
});

app.listen(Config.env.PORT, () => {
  return console.log(`Server : Started at port`, Config.env.PORT);
});

