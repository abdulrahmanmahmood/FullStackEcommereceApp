const { default :axiosClient} = require('./axiosClient')



const addToCart = (payload)=>{
  axiosClient.post('/carts',payload);
};

const getCartProducts = ()=>axiosClient.get('/carts?populate[products][products]=banner')



export default {
  addToCart,
  getCartProducts
}