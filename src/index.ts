import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = process.env.PORT || 8088;

app.get('/api', async (req, res) => {
  res.status(200).send(`Hello: ${req.headers['user-agent']}`);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});