import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({procuctaList}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>
      {procuctaList?.map(i=>(<ProductItem product={i} key={i.id}/>))}
    </div>
  )
}

export default ProductList