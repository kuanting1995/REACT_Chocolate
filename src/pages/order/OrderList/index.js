import OrderItem from './OrderItem'
import { useCart } from '../../../utils/useCart'
import { useState, Fragment } from 'react'

function OrderList() {
  // 更新products
  // params:
  // id 目前要更新的資料id
  // valueObject: object  ex. { count:3 }
  // const updateCount = (id, valueObject) => {
  //   const newProducts = products.map((v2, i2) => {
  //     return id === v2.id ? { ...v2, ...valueObject } : { ...v2 }
  //   })

  //   setProducts(newProducts)
  // }

  // // params: id 目前要刪除的資料id
  // const deleteProduct = (id) => {
  //   // 刪除這個id的資料 相當於 回傳一個新的陣列不包含此id的資料
  //   setProducts(products.filter((v2, i2) => id !== v2.id))
  // }

  const { cart } = useCart()
  return (
    <>
      <div className="col-md-8 cart">
        <div className="order_title">
          <div className="row">
            <div className="col">
              <h4>
                <b>訂購明細</b>
              </h4>
            </div>
            <div className="col-8 align-self-center text-right text-muted">
              {/* {cart.totalItems} items */}
             shopping details
            </div>
          </div>
        </div>
        <OrderItem />
        {/* <div className="back-to-shop">
          <span className="text-muted"></span>
        </div> */}
      </div>
    </>
  )
}

export default OrderList
