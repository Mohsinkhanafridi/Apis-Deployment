import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './db/dbConnection.js';
import router from './routes/routes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api",router);
app.get('/', (_, res) => {
  res.send('Hello, World!');
});

dbConnection();
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });