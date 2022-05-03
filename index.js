
// install axios and import
const axios = require("axios");

// setup
const data  = require("./data.json");
const API = "hhtp://localhost:8080/beat"; // place your link to api

// --------------------------------------
const parse = async (data) => {
  data.map((item) => {
    await axios.post(API, 
      item
    )
  })
}

// to start app simply type node index.js
parse(data);
