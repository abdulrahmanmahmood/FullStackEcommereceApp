import React from 'react'

const productDetails = ({params}) => {
  return (
    <p className='text-2xl'>{params.id}</p>
  )
}

export default productDetails