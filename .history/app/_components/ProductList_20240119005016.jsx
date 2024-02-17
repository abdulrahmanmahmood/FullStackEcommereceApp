import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({procuctaList}) => {
  return (
    <div className=''>
      {procuctaList?.map(i=>(<ProductItem product={i} key={i.id}/>))}
    </div>
  )
}

export default ProductList