import React from 'react'

const productDetails = ({params}) => {
  return (
    <h2 className='px-auto '>{params.id}</h2>
  )
}

export default productDetails