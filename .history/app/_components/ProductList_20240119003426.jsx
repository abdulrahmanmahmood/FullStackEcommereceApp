import React from 'react'

const ProductList = ({procuctaList}) => {
  return (
    <div>
      {procuctaList?.map(i=>(<ProductItem/>))}
    </div>
  )
}

export default ProductList