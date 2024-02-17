const { default :axiosClient} = require('./axiosClient')



const addToCart = (payload)=>{
  axios.post('/carts',payload);
};


export default {
  addToCart
}