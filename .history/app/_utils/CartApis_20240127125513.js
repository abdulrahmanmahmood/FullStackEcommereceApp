const { default :axiosClient} = require('./axiosClient')



const addToCart = (payload)=>{
  axiosClient.post('/carts',payload);
};

const getCartProducts = ()=>axiosClient.get('/carts?populate[products][populate]=banner')



export default {
  addToCart,
  getCartProducts
}