const { default: axiosClient } = require("./axiosClient");


const createOrder =(data)=> axiosClient.post('/orders',data)