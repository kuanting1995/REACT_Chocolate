import { useState, useEffect } from 'react'
import { useAuth } from '../utils/useAuth'
import '../pages/order/OrderApp.css'
// 以下相當於 import OrderList from './OrderList/index'
import { useCart } from '../utils/useCart'
// import OrderList from '../pages/order/OrderList'
import OrderItem from '../pages/order/OrderList/OrderItem'
import Summary from '../pages/order/Summary'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function OrderFinal() {
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
    let orderId = 0
    if (localStorage.getItem('order_id')) {
      orderId = localStorage.getItem('order_id')
    }
    // setLoading(true)
    const res = await axios.get(`api/order/${orderId}`)

    console.log(res.data)
    if (res.data.message === 'success') {
      setFields(res.data.order)
    } else {
      alert('有錯誤')
    }
  }

  // didMount
  useEffect(() => {
    if (auth.isAuth) {
      getUserData()
    }
  }, [auth.isAuth])

  return (
    <>
      <div className="d-flex row">
        {' '}
        <div className="">
          <h2 style={{ color: '#c3b385' }}>結帳流程</h2>
        </div>
        <div>
          <h6 className="">
            <span style={{ color: '#97844b' }}>填寫運送&付款資料 </span>
            <span style={{ color: '#97844b' }}>->訂購明細確認</span>
            <span style={{ color: '#807C70' }}>
              <b>->[完成訂單] </b>
            </span>
          </h6>
        </div>
      </div>
      <div className="order_bg row">
        <div>
          <h5 className="pb-3" style={{ color: '#FCF6E3' }}>
            訂購完成! 將立即為您安排出貨,謝謝!
          </h5>
        </div>
        {/* 訂購單 */}
        <div className="order_card p-0 ">
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
        <div className="card-a my-4">
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
                      <div id="orderpeople" className="pb-2">
                        <div>
                          <h4>
                            <b>收件者資訊:</b>
                          </h4>
                        </div>
                        <label>收件者:</label>
                        <input
                          type="text"
                          name="order_recipient"
                          value={fields.order_recipient}
                          onChange={handleFieldsChange}
                          required
                        />
                        <div> 聯絡電話: </div>
                        <input
                          type="text"
                          name="order_phone"
                          value={fields.order_phone}
                          onChange={handleFieldsChange}
                          required
                        />
                        <div> 收件地址: </div>
                        <input
                          type="text"
                          name="order_address"
                          value={fields.order_address}
                          onChange={handleFieldsChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              navigate('/home', { replace: true })
              clearCart()
            }}
          >
            回首頁
          </button>
        </div> */}
      </div>
    </>
  )
}

export default OrderFinal
