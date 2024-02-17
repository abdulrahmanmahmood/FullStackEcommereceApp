const { default: axios } = require("axios");

const addToCart = (payload)=>{
  axios.post('/carts',payload);
};


export default {
  addToCart
}