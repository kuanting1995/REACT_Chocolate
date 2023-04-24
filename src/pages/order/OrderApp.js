import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './OrderApp.css'
// 以下相當於 import OrderList from './OrderList/index'
import OrderList from './OrderList'
import Summary from './Summary'
import { useCart } from '../../utils/useCart'

const sampleData = [
  {
    id: 1,
    name: '焦糖杏仁方形牛奶巧克力',
    price: 110,
    img: 'https://www.seescandies.com.tw/upload/202112221322466ul3j1.jpeg',
  },
  {
    id: 2,
    name: '核桃焦糖黑巧克力',
    price: 110,
    img: 'https://www.seescandies.com.tw/upload/20210903134110jw6wg1.jpeg',
  },
]

function OrderApp() {
  const navigate = useNavigate()
  const [agree, setAgree] = useState(false)
  // 擴充product物件多一個count屬性
  const { cart, items, plusOne, minusOne, removeItem } = useCart()
  const [products, setProducts] = useState(items.map((v, i) => ({ ...v })))
  // const [products, setProducts] = useState(
  //   sampleData.map((v, i) => ({ ...v, count: 1 }))
  // )

  // 計算總數量(數量 累加)
  const calcTotalNumber = () => {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].count
    }

    return total
  }

  // 計算總價(單價x數量 累加)
  const calcTotalPrice = () => {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].count * cart[i].price
    }

    return total
  }
  // const [textareaText, setTextareaText] = useState('輸入備註')
  const [delivery, setdelivery] = useState('7-11取貨')
  const deliveryOptions = ['7-11取貨', '門市自取', '宅配到府']
  const [paymoney, setpaymoney] = useState('ATM轉帳')
  const paymoneyOptions = ['ATM轉帳', '貨到付款']
  const [inputName, setinputName] = useState('')
  const [inputphone, setinputphone] = useState('')
  const [inputText, setInputText] = useState('')
  const [selectedValue, setSelectedValue] = useState(0)
  const cities = [
    { label: '台北市', value: 1 },
    { label: '新北市', value: 2 },
    { label: '高雄市', value: 3 },
  ]
  const subcities = [
    { label: '大安區', value: 1 },
    { label: '中正區', value: 2 },
    { label: '新店區', value: 3 },
  ]
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
            <span style={{ color: '#807C70' }}>
              <b>->[訂購明細確認]</b>
            </span>
            <span style={{ color: '#97844b' }}>->完成訂單</span>
          </h6>
        </div>
      </div>
      <div className="order_bg row">
        {/* card-a 運送方式*/}
        {/* <div className="card-a mt-3">
          <div className="order_card col-12">
            <div className="row">
              <div className="col-md-8 cart">
                <div className="order_title">
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>選擇運送方式</b>
                      </h4>
                      <section id="radio-button" className="col">
                        {deliveryOptions.map((v, i) => {
                          return (
                            <div key={i} className="d-flex">
                              <input
                                className="col-1"
                                type="radio"
                                value={v}
                                checked={v === delivery}
                                onChange={(e) => {
                                  setdelivery(e.target.value)
                                }}
                              />
                              <label className="col">{v}</label>
                            </div>
                          )
                        })}
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* card-a 付款*/}
        {/* <div className="card-a mt-3">
          <div className="order_card col-12">
            <div className="row">
              <div className="col-md-8 cart">
                <div className="order_title">
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>選擇付款方式</b>
                      </h4>
                      <section id="radio-button" className="col">
                        {paymoneyOptions.map((v, i) => {
                          return (
                            <div key={i} className="d-flex">
                              <input
                                className="col-1"
                                type="radio"
                                value={v}
                                checked={v === paymoney}
                                onChange={(e) => {
                                  setpaymoney(e.target.value)
                                }}
                              />
                              <label className="col">{v}</label>
                            </div>
                          )
                        })}
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* card-a 訂購資料表單*/}
        {/* <div className="card-a mt-3">
          <div className="order_card col-12">
            <div className="row">
              <div className="col-md-8 cart">
                <div className="order_title">
                  <div className="row">
                    <div className="col">
                      <h4>
                        <b>收件人資訊</b>
                      </h4>
                      <section id="input-text">
                        <h6>姓名(*必填,請輸入本名)</h6>
                        <input
                          type="text"
                          value={inputName}
                          onChange={(e) => {
                            setinputName(e.target.value)
                          }}
                        />
                      </section>
                      <section id="input-text">
                        <h6>行動電話(*必填)</h6>
                        <input
                          type="text"
                          value={inputphone}
                          onChange={(e) => {
                            setinputphone(e.target.value)
                          }}
                        />
                        <section id="input-text">
                          <h6>Email(*必填)</h6>
                          <input
                            type="text"
                            value={inputName}
                            onChange={(e) => {
                              setinputName(e.target.value)
                            }}
                          />
                        </section>
                      </section>
                      <section id="select">
                        <h6>收貨人地址(*宅配到府必填)</h6>
                        <select
                          value={selectedValue}
                          onChange={(e) => {
                            setSelectedValue(Number(e.target.value))
                          }}
                        >
                          <option value="0">-請選擇城市-</option>
                          {cities.map((v, i) => {
                            return (
                              <option key={i} value={v.value}>
                                {v.label}
                              </option>
                            )
                          })}
                        </select>
                      </section>
                      <section id="select">
                        <select
                          value={selectedValue}
                          onChange={(e) => {
                            setSelectedValue(Number(e.target.value))
                          }}
                        >
                          <option value="0">-請選擇區域-</option>
                          {subcities.map((v, i) => {
                            return (
                              <option key={i} value={v.value}>
                                {v.label}
                              </option>
                            )
                          })}
                        </select>
                      </section>
                      <section id="input-text">
                        <input
                          type="text"
                          value={inputText}
                          onChange={(e) => {
                            setInputText(e.target.value)
                          }}
                        />
                      </section>
                      <section id="checkbox-single">
                        <div className="d-flex ">
                          <input
                            className="col-1"
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => {
                              setAgree(e.target.checked)
                              setAgree(!agree)
                              console.log(typeof e.target.checked)
                            }}
                          />
                          <label className="col">
                            同步收件人資料到會員資料
                          </label>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* 訂購單 */}
        <div className="m-0">
          <h5 className="" style={{ color: '#FCF6E3' }}>
            您好,請最終確認以下購物資訊:
          </h5>
        </div>
        <div className="order_card mt-5 px-0">
          <div className="row">
            <OrderList products={products} setProducts={setProducts} />
            <Summary
              totalNumber={cart.totalItems}
              totalPrice={cart.cartTotal}
            />
          </div>
          <div className="py-4 d-flex flex-row-reverse">
            {' '}
            {/* <button
              type="button"
              className="btn btn-outline-dark mx-1"
              onClick={() => {
                navigate('/cart', { replace: true })
              }}
            >
              修改訂單
            </button> */}
            <button
              type="button"
              className="btn btn-light mx-1"
              onClick={() => {
                navigate('/orderform', { replace: true })
              }}
            >
              回上一步
            </button>
            <button
              type="button"
              className="btn btn-light mx-1"
              onClick={() => {
                navigate('/orderfinal', { replace: true })
                window.scrollTo(0, 0)
              }}
            >
              確認下單
            </button>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}

export default OrderApp
