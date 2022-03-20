
const axios = require("axios");
const http  = require("http");

// add json to src folder
// and import like this
const data  = require("./data.json");

const API = "http://localhost:8080/beat"; // place your link to api
const hostname = "localhost"; // place your ip 
const port = 5000; // place here your port

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Server Created Successfully...');
});

const parse = (data) => {
  data.map((item) => {
    axios.post(API, 
      item
    )
  })
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  parse(data);
});




