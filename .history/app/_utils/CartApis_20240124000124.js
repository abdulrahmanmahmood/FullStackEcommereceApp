const { default :axiosClient} = require('./axiosClient')



const addToCart = (payload)=>{
  axiosClient.post('/carts',payload);
};

const getCartProducts = ()=>{
  axiosClient.get('/carts?populate=*')
}


export default {
  addToCart
}