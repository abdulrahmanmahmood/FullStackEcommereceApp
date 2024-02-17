import CartApis from "../_utils/CartApis";


const cart = () => {

  const getCartsProducts=()=>{
    CartApis.getCartProducts().then((res)=>{
      console.log('cart products',res.data.data)
      
    })}
  return (
    <div>cart</div>
  )
}

export default cart