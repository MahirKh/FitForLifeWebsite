const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');


app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    keys: ['alksfda43tqnf912983k']
}));

app.use(authRouter);
app.use(productsRouter);

app.listen(3000, () =>{
    console.log('Listening');
});