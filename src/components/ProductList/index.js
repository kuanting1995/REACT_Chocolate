import React from 'react'
import ProductItem from './ProductItem'

function ProductList(props) {
  const { products } = props

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              {products.map((product, i) => {
                return <ProductItem key={i} product={product} />
              })}
            </div>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ProductList
