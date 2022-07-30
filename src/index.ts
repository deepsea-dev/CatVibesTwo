import express from 'express';
import cors from 'cors';
import { init as rootControllerInit } from './controllers/rootController/rootController';

const app = express();
app.use(cors());

const port = process.env.PORT || 8088;

rootControllerInit(app);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});