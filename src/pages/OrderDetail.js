import { useState, useEffect } from 'react'
import { useAuth } from '../utils/useAuth'
import '../pages/order/OrderApp.css'
// 以下相當於 import OrderList from './OrderList/index'
import { useCart } from '../utils/useCart'
// import OrderList from '../pages/order/OrderList'
import OrderItem from './order/OrderList/OrderItem'
import Summary from './order/Summary'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function OrderDetail() {
  const { auth, setAuth } = useAuth()
  const { cart, items, clearCart } = useCart()
  // const [products, setProducts] = useState(items.map((v, i) => ({ ...v })))
  const navigate = useNavigate()
  const [fields, setFields] = useState({
    order_id: 0,
    order_recipient: '',
    order_address: '',
    order_phone: '',
  })
  const handleFieldsChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    })
  }
  // didMount時抓所有資料用
  const getUserData = async () => {
    // setLoading(true)
    const res = await axios.get(`api/users/${!auth.orderId}`)

    if (res.data.message === 'success') {
      setFields(res.data.user)
    } else {
      alert('有錯誤')
    }
  }

  // didMount
  useEffect(() => {
    if (!auth.isAuth) {
      getUserData()
    }
  }, [!auth.isAuth])

  return (
    <>
      <div className="order_bg row">
        {/* 訂購單 */}
        <div className="order_card p-0">
          <div className="row">
            {/* orderlist */}
            <div className="col-md-8 cart">
              <div className="order_title">
                <div className="row">
                  <div className="col">
                    <h4>
                      <b>訂購單</b>
                    </h4>
                  </div>
                  <div className="col align-self-center text-right text-muted">
                    {/* {cart.totalItems} items */}Shopping List
                  </div>
                </div>
              </div>
              <OrderItem />
            </div>

            <Summary
              totalNumber={cart.totalItems}
              totalPrice={cart.cartTotal}
            />
          </div>
        </div>
        {/* card-a 運送與付款方式*/}
        <div className="card-a">
          <div className="order_card col-12">
            <div className="row">
              <div className="col-md-8 cart">
                <div className="order_title">
                  <div className="row">
                    <div className="col pt-3">
                      <div id="deliveryway" className="pb-2">
                        <h4>
                          <b>運送與付款:</b>
                        </h4>
                        <hr />
                        <div> 付款方式: ATM付款</div>
                        <div> 運送方式: 宅配到府</div>
                        <hr />
                      </div>
                      {/* <div id="orderpeople" className="pb-2">
                        <div>
                          <h4>
                            <b>收件者資訊:</b>
                          </h4>
                        </div>
                        <label>收件者:</label>
                        <input
                          type="text"
                          name="name"
                          value={fields.order_recipient}
                          onChange={handleFieldsChange}
                          required
                        />
                        <div> 聯絡電話: </div>
                        <div> email: </div>
                        <div> 收件地址: </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              navigate('/ordermember', { replace: true })
            }}
          >
            上一頁
          </button>
        </div>
      </div>
    </>
  )
}
  
export default OrderDetail
