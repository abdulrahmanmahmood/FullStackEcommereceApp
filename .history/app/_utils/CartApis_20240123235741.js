const { default :axiosClient} = require()



const addToCart = (payload)=>{
  axios.post('/api/carts',payload);
};


export default {
  addToCart
}