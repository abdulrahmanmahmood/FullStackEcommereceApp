const { default: axiosClient } = require("./axiosClient");

const getLatestPorducts = ()=>axiosClient.get('/products?populate=*');
const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`);
const getSimelarBroducts = (username, )=>axiosClient.get(`/products?filters[username][$eq]=John`)

export default {
  getLatestPorducts,
  getProductById
}