import React from 'react'

const ProductList = ({procuctaList}) => {
  return (
    <div>
      {procuctaList.map(i=>(
      <div>{i}</div>))}
    </div>
  )
}

export default ProductList