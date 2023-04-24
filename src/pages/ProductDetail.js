import { useState } from 'react'

// 以下相當於 import OrderList from './OrderList/index'
import { useCart } from '../utils/useCart'
// import OrderList from '../pages/order/OrderList'
import Detail from './Product/Detail'
import Summary from './order/Summary'
import { useNavigate } from 'react-router-dom'
function ProductDetail() {
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
                    <div class="card-header">商品詳細資訊</div>
                    <div class="card-body">
                      <h5 class="card-title">PRODUCT INFORMATION/產品介紹</h5>
                      <img
                        src="https://www.seescandies.com.tw/upload/202112221322466ul3j1.jpeg"
                        className="img-fluid"
                      ></img>
                      <p class="card-text">焦糖杏仁方形牛奶巧克力</p>
                      <p class="card-text">Almond Square</p>
                      <p class="card-text">(20g/單顆)</p>
                      <p class="card-text">
                        焦糖與大顆香脆杏仁裹上牛奶巧克力。
                      </p>
                      <p class="card-text text-primary">
                        自選巧克力單顆為紙袋裝
                      </p>
                      <p class="card-text">*盒裝尺寸*</p>
                      <p class="card-text">半磅>12入</p>
                      <p class="card-text">一磅>21-24入</p>
                      <p class="card-text">二磅>42入(雙層)</p>
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
            <Detail />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
