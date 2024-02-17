import React from 'react'

const productDetails = ({params}) => {
  return (
    <h2 className='py-5 px-3'>{params.id}</h2>
  )
}

export default productDetails