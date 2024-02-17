const { default: axiosClient } = require("./axiosClient");

const getLatestProducts =()=>axiosClient.get('/products')