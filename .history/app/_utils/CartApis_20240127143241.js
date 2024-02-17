const { default: axiosClient } = require("./axiosClient");

const addToCart = (payload) => {
  axiosClient.post("/carts", payload);
};

const getCartProducts = (email) =>
  axiosClient.get(
    `/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`
  );

const deleteCartItem =(id)=>axiosClient.delete


export default {
  addToCart,
  getCartProducts,
};
