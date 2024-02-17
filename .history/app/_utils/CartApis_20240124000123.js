const { default :axiosClient} = require('./axiosClient')



const addToCart = (payload)=>{
  axiosClient.post('/carts',payload);
};

const getCartProducts = ()=>{
  axiosClient.get('/carts')
}


export default {
  addToCart
}