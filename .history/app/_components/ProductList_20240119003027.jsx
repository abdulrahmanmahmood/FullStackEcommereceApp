import React from 'react'

const ProductList = ({procuctaList}) => {
  return (
    <div>
      {procuctaList.map(i=>(<h1>{i.attributes.title}</h1>))}
    </div>
  )
}

export default ProductList