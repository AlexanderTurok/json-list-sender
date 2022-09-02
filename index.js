
// install axios and import
const axios = require("axios");

// import json list
const data  = require("./data.json");
const API = "hhtp://localhost:8080/beat"; // place your link to api

const parse = async (data) => {
  await data.map((item) => {
    axios.post(API, 
      item
    )
  })
}

// to start type node index.js
parse(data);
