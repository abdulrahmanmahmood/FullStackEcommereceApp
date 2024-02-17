const { default :axiosClient} = require('./a')



const addToCart = (payload)=>{
  axios.post('/api/carts',payload);
};


export default {
  addToCart
}