import React from 'react'

const ProductList = ({procuctaList}) => {
  return (
    <div>
      {procuctaList.map((i)=>(<h1>{product.attributes.title}</h1>))}
    </div>
  )
}

export default ProductList