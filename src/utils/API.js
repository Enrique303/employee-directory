import axios from "axios";
const URL = "https://randomapi.com/api/1234abcd?key=";

const API = {
  getUsers: function () {
    return axios.get(URL);
  },
};

export default API;