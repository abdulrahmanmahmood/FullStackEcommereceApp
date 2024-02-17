import React from 'react'

const ProductItem = ({product}) => {
  return (
    <div>{product.attributes.title}</div>
  )
}

export default ProductItem