const { default: axiosClient } = require("./axiosClient");

const getLatestPorduct = ()=>axiosClient.get('/products');

export default {
  getLatestPorject
}