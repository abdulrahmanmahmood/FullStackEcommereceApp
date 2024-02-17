const { default :axiosClient} = require('./axiosClient')



const addToCart = (payload)=>{
  axiosClient.post('/carts',payload);
};

const getCartProducts = (mail)=>axiosClient.get(`/carts?populate[products][populate]=banner?filters[email][$eq]=${mail}`)



export default {
  addToCart,
  getCartProducts
}