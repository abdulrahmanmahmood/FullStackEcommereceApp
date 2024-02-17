import React from 'react'

const ProductList = ({procuctaList}) => {
  return (
    <div>
      {procuctaList.map(i=>(
      <div>{i?.attributes?.title}</div>))}
    </div>
  )
}

export default ProductList