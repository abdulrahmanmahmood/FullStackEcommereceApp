import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({procuctaList}) => {
  return (
    <div>
      {procuctaList?.map(i=>(<ProductItem product={i} key={i.attributes.}/>))}
    </div>
  )
}

export default ProductList