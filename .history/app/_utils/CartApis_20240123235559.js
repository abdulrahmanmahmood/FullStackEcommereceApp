const { default: axios } = require("axios");

const addToCart = (payload)=>{
  axios.post('/api/carts',payload);
};


export default {
  addToCart
}