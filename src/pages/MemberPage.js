import { useState } from 'react'
// 以下相當於 import OrderList from './OrderList/index'
// import OrderList from '../pages/order/OrderList'
import { useNavigate } from 'react-router-dom'
function MemberPage() {
  const navigate = useNavigate()

  return (
    <>
      <div className="row text-center">
        <div className="member">
          <div className="row">
            <div className="order_title">
              <div className="row">
                <div className="col">
                  <div class="w-60 card text-center">
                    <div class="card-header" style={{ background: '#b1aa97' }}>
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
    </>
  )
}

export default MemberPage
