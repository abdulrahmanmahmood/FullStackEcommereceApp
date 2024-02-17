const { default: axiosClient } = require("./axiosClient");

const getLatestPorect = ()=>axiosClient.get('/products');

export default {
  getLatestPorject
}