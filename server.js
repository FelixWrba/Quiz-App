// .env config
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index');
});

// external routers
const createRouter = require('./routes/create');
app.use('/create', createRouter);

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

const accountRouter = require('./routes/account');
app.use('/account', accountRouter);