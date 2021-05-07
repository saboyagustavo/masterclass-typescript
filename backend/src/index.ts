import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);


app.listen(3333, () => 'SERVER RUNNING ON PORT 3333');