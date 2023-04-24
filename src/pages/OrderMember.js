import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../utils/useCart'
function OrderMember() {
  const [orders, setOrders] = useState([])
  const navigate = useNavigate()
  const { cart } = useCart()
  const getOrders = async () => {
    const res = await axios.get(
      // 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
      'http://localhost:3005/api/order'
    )
    console.log(res.data.order)
    setOrders(res.data.order)
  }

  //didMount
  useEffect(() => {
    getOrders()
  }, [])

  // 寫法一
  // useEffect(() => {
  //   fetch('http://localhost:3005/api/order').then((res) => res.json())
  // }, [])
  return (
    <>
      <div className="row text-center">
        {/* 訂購單 */}
        <div className="member">
          <div className="row">
            <div className="row text-center">
              <div className="member">
                <div className="row">
                  <div className="order_title">
                    <div className="row">
                      <div className="col">
                        <div class="w-60 card text-center">
                          <div
                            class="card-header"
                            style={{ background: '#b1aa97' }}
                          >
                            會員中心
                          </div>
                          <div class="d-flex">
                            <div class="card-body">
                              <button
                                type="button"
                                className="btn btn-outline-dark mx-1"
                                onClick={() => {
                                  navigate('/Profile', { replace: true })
                                }}
                              >
                                個人資料專區
                              </button>
                            </div>
                            <div class="card-body">
                              <button
                                type="button"
                                className="btn btn-outline-dark mx-1"
                                onClick={() => {
                                  navigate('/ordermember', { replace: true })
                                }}
                              >
                                訂單查詢
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ordermember */}
            <div className="container">
              <table
                className="table"
                cellPadding="0"
                border="0"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>訂單號碼</th>
                    <th>訂單日期</th>
                    <th>合計</th>
                    <th>訂單狀態</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {/* 寫法一
                  {orders.map((value) => (
                    <tr key={value.order_id}>
                      <td>{value.order_id}</td>
                      <td>{value.created_at}</td>
                      <td>${cart.cartTotal}</td>
                      <td>出貨中</td>
                      <td>
                        <button className="btn btn-outline-dark">查閱</button>
                      </td>
                    </tr>
                  ))} */}
                  {/* 假資料 */}
                  {/* <tr>
                    <td>A2</td>
                    <td>2023-03-23</td>
                    <td>${cart.cartTotal}</td>
                    <td>出貨中</td>
                    <td>
                      <button
                        className="btn btn-outline-dark"
                        onClick={() => {
                          navigate('/orderdetail', { replace: true })
                        }}
                      >
                        查閱
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>A1</td>
                    <td>2023-03-22</td>
                    <td>$310</td>
                    <td>已完成</td>
                    <td>
                      <button className="btn btn-outline-dark">查閱</button>
                    </td>
                  </tr>  */}
                  {orders.map((v, i) => {
                    return (
                      <tr key={v.order_id}>
                        <td>{v.order_id}</td>
                        <td>{v.created_at}</td>
                        <td>${cart.cartTotal}</td>
                        <td>出貨中</td>
                        <td>
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => {
                              navigate('/orderdetail', { replace: true })
                            }}
                          >
                            查閱
                          </button>
                        </td>
                      </tr>
                    )
                  })}
                  {/* <tr>
                    <td>3</td>
                    <td>2023-03-22 14:22:27</td>
                    <td>$310</td>
                    <td>已完成</td>
                    <td>
                      <button className="btn btn-outline-dark">查閱</button>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderMember
