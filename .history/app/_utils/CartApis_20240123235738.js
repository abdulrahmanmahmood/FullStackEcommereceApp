const { default :axiosClient} = requ



const addToCart = (payload)=>{
  axios.post('/api/carts',payload);
};


export default {
  addToCart
}