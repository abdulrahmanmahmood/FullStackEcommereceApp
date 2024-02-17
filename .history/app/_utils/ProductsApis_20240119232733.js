const { default: axiosClient } = require("./axiosClient");

const getLatestPorducts = ()=>axiosClient.get('/products?populate=*');
const getProductById = (id)=>axiosClient.get(`/products/${id}`);

export default {
  getLatestPorducts,
  getProductById
}