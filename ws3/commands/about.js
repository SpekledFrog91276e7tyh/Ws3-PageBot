const axios = require("axios");
const name = "about" ;

module.exports = {
  name,
  description: "test",
  async run ({ api, event, send, args }){

    send("Hi");
    
  }
}
