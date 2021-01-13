// //we grab the http module
// const http = require('http');
//
// const server = http.createServer((request, response) => {
//
//     // console.log('headers', request.headers);
//     console.log('method', request.method);
//     console.log('url', request.url);
//     const user = {
//         name: 'jose',
//         hobby: 'coding'
//     }
//
//     // application/json is how we are able to use json in the server
//     response.setHeader('Content-Type', 'application/json');
//     //this will output a json file on the web
//     response.end(JSON.stringify(user));
// })
//
// //this is the port we want it to listen to
// server.listen(3000);

//there are a lot of tools we can use to achive this. A very popular one is Express.js

//this is how we initiate an express server

//the first parameter is the path. req === request | res === response
//we can use .get .post .delete .post methods

// app.get('/', (req, res) => {
//     res.send('getting root')
// });
//
// app.get('/profile', (req, res) => {
//     res.send('getting profile')
// });
//
// app.post('/profile', (req, res) => {
//     //we can send html or we can send objects
//     // res.send('<h1> Hellloooooo </h1>')
//         const user = {
//         name: 'jose',
//         hobby: 'coding'
//     }
//     res.send(user)
// });



//it gets the request of the website, we can do whatever we want with it.
// Then we hit next and express keeps running through the routes
// app.use((req, res, next) => {
//     console.log('hello');
//     next();
// })
//
// app.get('/', (req, res) => {
//     res.send('testing')
// });


//getting the post request to work
const express = require('express');

const app = express();

//this is the middleware package we use to access reqw.body
app.use(express.urlencoded({extended: false})); //this is how we let postman know we are working with url encoded fromat
app.use(express.json()); //this is how we let postman know we're working with json format

app.get('/', (req, res) => {
    res.send('getting root')
});

app.get('/profile', (req, res) => {
    res.send('getting profile')
});

app.post('/profile', (req, res) => {
    //we can send html or we can send objects
    // res.send('<h1> Hellloooooo </h1>')


    //to access this information we simply do
    //but if we want to access req.body, we need to use a middleware
    //express added it to its code

    console.log(req.body);

    res.send('Successfully sent')
});


app.listen(3000);

// its a simple matter of saying
//if you go to this route, do this, if you go to this other route, do that
//everything is logical and trickles all the way down







