import React from 'react'

const productDetails = ({params}) => {
  return (
    <h2 className='px-auto py-auto'>{params.id}</h2>
  )
}

export default productDetails