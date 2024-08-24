
const express = require('express');
const {ServerConfig} = require('./config');

//const apiRouter = require('./router');

const app = express();

//app.use('/api', apiRouter);

app.listen(ServerConfig.PORT, () => {
        console.log(`Successfully started the server on PORT :${ServerConfig.PORT}`);
}); 