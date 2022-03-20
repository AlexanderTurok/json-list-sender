
// install axios and import
const axios = require("axios");

// setup
const data  = require("./data.json");
const API = ""; // place your link to api

// --------------------------------------
const parse = async (data) => {
  await data.map((item) => {
    axios.post(API, 
      item
    )
  })
}

// to start app simply type node index.js
parse(data);
