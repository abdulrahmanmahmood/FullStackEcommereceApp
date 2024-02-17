import React from 'react'

const productDetails = ({params}) => {
  return (
    <h2 className='pt-5'>{params.id}</h2>
  )
}

export default productDetails