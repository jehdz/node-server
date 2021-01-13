//we grab the http module
const http = require('http');

const server = http.createServer((request, response) => {

    // console.log('headers', request.headers);
    console.log('method', request.method);
    console.log('url', request.url);
    const user = {
        name: 'jose',
        hobby: 'coding'
    }

    // application/json is how we are able to use json in the server
    response.setHeader('Content-Type', 'application/json');
    //this will output a json file on the web
    response.end(JSON.stringify(user));
})

//this is the port we want it to listen to
server.listen(3000);

//there are a lot of tools we can use to achive this. A very popular one is Express.js