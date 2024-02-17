import React from 'react'

const productDetails = ({params}) => {
  return (
    <p className='text-[50px] absolute py-11'>{params.product}</p>
  )
}

export default productDetails