import React from 'react'

const productDetails = ({params}) => {
  return (
    <p className='text-[50px] absolute py'>{params.id}</p>
  )
}

export default productDetails