const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// panggil router
var routes = require('./router');
routes(app);

app.listen(3000, () => {
    console.log(`Server started on port`);
});