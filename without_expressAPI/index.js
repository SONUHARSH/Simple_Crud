const http = require('http'); // require http model

const PORT = 8307;

//using the createServer function we can actually create a basic http server using http moduls.
//This function return a server object, and takes a callback as a argument
//This function created a server object but didn't start the server

const server = http.createServer(function listener() {
        //this callbacks is a kind of listener function that is going to callect
        //every http request that we will make to our server

        //TODO..
});


server.listen(PORT, function exec() {
        //once we succesfully boot up the server on the given port, this callback will be
        //executed
        console.log(`server is Up and running on PORT: ${PORT}`);
 
});



