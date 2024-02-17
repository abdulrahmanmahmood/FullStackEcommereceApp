const { default :axiosClient} = require('./axiosClient')



const addToCart = (payload)=>{
  axiosClient.post('/carts',payload);
};

const getCartProducts = ()=>{
  axiosClient.get()
}


export default {
  addToCart
}