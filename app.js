const express = require('express');
const nunjucks = require('nunjucks');
const logger = require('morgan');

const admin = require('./Routes/admin');
const contacts = require('./Routes/contacts');

const app = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true, //html 태그 사용을 막음
    express : app
});

// 미들웨어 세팅
app.use(logger('dev'));


app.get('/', (req, res) => {
    res.send('hello express');
});

function vipMiddleware(req, res, next) {
    console.log('최우선 미들웨어');
    next();
}
// app.use('/admin', vipMiddleware, admin);
app.use('/admin', admin);
app.use('/contacts', contacts);

app.listen( port, () => {
    console.log(`Express listening on port ${port}`);
});