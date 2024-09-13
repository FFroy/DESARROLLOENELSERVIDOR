import express from 'express';
import routes from './routes'

const app = express();

const port = process.env.PORT || 3000;

app.get('', (req ,res) => {
    res.send('Api works');
})

app.use(routes);

app.listen(port, () => {
    console.log(`app is runing in port ${port}`);
})

