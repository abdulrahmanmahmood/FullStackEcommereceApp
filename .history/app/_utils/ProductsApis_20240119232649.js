const { default: axiosClient } = require("./axiosClient");

const getLatestPorducts = ()=>axiosClient.get('/products?populate=*');
const get

export default {
  getLatestPorducts
}