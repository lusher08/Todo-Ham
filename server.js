const express   = require('express');
const basicAuth = require('express-basic-auth');
const path      = require('path');
const app       = express();

app.use(basicAuth({
    users: { 'minutapita': '0925' },
    challenge: true,
    realm: 'Todo Ham'
}));

app.use(express.static(path.join(__dirname, 'public')));
app.listen(process.env.PORT || 3000);