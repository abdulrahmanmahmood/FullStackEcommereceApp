const { default :axiosClient} = require('./axiosClient')



const addToCart = (payload)=>{
  axiosClient.post('/carts',payload);
};

const getCart


export default {
  addToCart
}