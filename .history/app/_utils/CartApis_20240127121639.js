const { default :axiosClient} = require('./axiosClient')



const addToCart = (payload)=>{
  axiosClient.post('/carts',payload);
};

const getCartProducts = ()=>axiosClient.get(`/carts?populate[products][populate]=banner?filters[email][$eq]=abod45839@gmail.com')



export default {
  addToCart,
  getCartProducts
}