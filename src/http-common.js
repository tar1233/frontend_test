import axios from "axios";

export default axios.create({
  baseURL: "https://cm-heroku-test-nodejs.herokuapp.com/api",
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-type": "application/json"
  }
});