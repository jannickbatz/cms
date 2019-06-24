const express = require('express');
const pjson = require('./package.json');
const fs = require('fs');
const port = process.env.PORT || 6912;
const debug = require('debug')('kodebase');


const app = express();



require('./config/index')(app);
require('./routes/index')(app);


app.listen(port, () => {
    console.log("Det virker måske");
});