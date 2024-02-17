const { default: axiosClient } = require("./axiosClient");

const getLatestPordect = ()=>axiosClient.get('/products');

export default {
  getLatestPorject
}