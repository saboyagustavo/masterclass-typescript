import express from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.send('Hello world!');
});

app.listen(3333, () => 'SERVER RUNNING ON PORT 3333');