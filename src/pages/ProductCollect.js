import { useState } from 'react'

// 以下相當於 import OrderList from './OrderList/index'
import { useCart } from '../utils/useCart'
// import OrderList from '../pages/order/OrderList'
import Collect from './Product/Collect'
import Summary from './order/Summary'
import { useNavigate } from 'react-router-dom'
function ProductCollect() {
  const navigate = useNavigate()
  const { cart, items } = useCart()
  const [products, setProducts] = useState(items.map((v, i) => ({ ...v })))
  return (
    <>
      <div className="order_bg row text-center">
        {/* 訂購單 */}
        <div className="order_card">
          <div className="row">
            {/* orderlist */}

            <div className="order_title">
              <div className="row">
                <div className="col">
                  <div class="card text-center ">
                    <div class="card-header">商品收藏頁</div>
                    <div class="card-body">
                      <h5 class="card-title">收藏區</h5>
                      <img
                        src="https://www.seescandies.com.tw/upload/202112221322466ul3j1.jpeg"
                        className="img-fluid"
                      ></img>
                      <p class="card-text">焦糖杏仁方形牛奶巧克力</p>
                      <p class="card-text">Almond Square</p>
                      <p class="card-text">已收藏</p>
                      <button
                        type="button"
                        className="btn btn-outline-dark mx-1"
                        onClick={() => {
                          navigate('/product-pages', { replace: true })
                        }}
                      >
                        返回商品頁
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Collect />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCollect
