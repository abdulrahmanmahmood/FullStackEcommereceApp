const { default: axiosClient } = require("./axiosClient");

const getLatestPorducts = ()=>axiosClient.get('/products?populate=*');
const getProductById = (id)=>axiosClient.get(`/products/${id}?populate=*`);
const getSimelarBroducts = (catt, cat)=>axiosClient.get(`/products?filters[${catt}][$eq]=${cat}`)

export default {
  getLatestPorducts,
  getProductById
}