const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const errorHandler = require('./error-handle');
const userRoutes = require('../router')

const app = new Koa();

app.use(bodyParser());
userRoutes(app);
app.on('error', errorHandler)

module.exports = app