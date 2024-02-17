const { default :axiosClient} = 



const addToCart = (payload)=>{
  axios.post('/api/carts',payload);
};


export default {
  addToCart
}