import { useState } from 'react'
import { useAuth } from '../utils/useAuth'
import { useLoader } from '../utils/useLoader'
import axios from 'axios'
// import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function OrderForm() {
  const [agree, setAgree] = useState(false)
  const { auth, setAuth } = useAuth()
  const { loader, loading, setLoading } = useLoader(2000)
  const navigate = useNavigate()
  const [fields, setFields] = useState({
    // name: '',
    // email: '',
    order_recipient: '',
    order_phone: '',
    order_address: '',
  })

  // const [passwordFieldType, setPasswordFieldType] = useState('password')

  // const [confirmPasswordFieldType, setConfirmPasswordFieldType] =
  //   useState('password')
  const handleFieldsChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setLoading(true)
    const orderform = fields

    const res = await axios.post('api/order', orderform)

    console.log(res)

    if (res.data.order) {
      localStorage.setItem('order_id', res.data.order.order_id)
    }
  }
  const orderform = (
    // <form onSubmit={handleRegister}>
    //   <div>
    //     <label>姓名</label>
    //     <input
    //       type="text"
    //       name="name"
    //       value={fields.name}
    //       onChange={handleFieldsChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label>Email</label>
    //     <input
    //       type="email"
    //       name="email"
    //       value={fields.email}
    //       onChange={handleFieldsChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label>帳號</label>
    //     <input
    //       type="text"
    //       name="username"
    //       value={fields.username}
    //       onChange={handleFieldsChange}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label>密碼</label>
    //     <input
    //       type={passwordFieldType}
    //       name="password"
    //       value={fields.password}
    //       onChange={handleFieldsChange}
    //       required
    //     />
    //     <button
    //       type="button"
    //       onClick={() => {
    //         setPasswordFieldType(
    //           passwordFieldType === 'text' ? 'password' : 'text'
    //         )
    //       }}
    //     >
    //       {passwordFieldType === 'text' ? <FaRegEyeSlash /> : <FaRegEye />}
    //     </button>
    //   </div>
    //   <div>
    //     <label>確認密碼</label>
    //     <input
    //       type={confirmPasswordFieldType}
    //       name="confirmPassword"
    //       value={fields.confirmPassword}
    //       onChange={handleFieldsChange}
    //       required
    //     />
    //     <button
    //       type="button"
    //       onClick={() => {
    //         setConfirmPasswordFieldType(
    //           confirmPasswordFieldType === 'text' ? 'password' : 'text'
    //         )
    //       }}
    //     >
    //       {confirmPasswordFieldType === 'text' ? (
    //         <FaRegEyeSlash />
    //       ) : (
    //         <FaRegEye />
    //       )}
    //     </button>
    //   </div>
    //   <button type="submit">註冊</button>
    // </form>
    <form onSubmit={handleRegister}>
      <div className="card-a mt-3">
        <div className="order_card col-12">
          <div className="row">
            <div className="col-md-8 cart">
              <div className="order_title">
                <div className="row">
                  <div className="col">
                    <h4 className="py-2">
                      <b>收件人資訊</b>
                    </h4>
                    <section id="input-text">
                      <h6>姓名(*必填,請輸入本名)</h6>
                      <input
                        type="text"
                        name="order_recipient"
                        value={fields.order_recipient}
                        onChange={handleFieldsChange}
                        required
                      />
                    </section>
                    <section id="input-text">
                      <h6>行動電話(*必填)</h6>
                      <input
                        type="text"
                        name="order_phone"
                        value={fields.order_phone}
                        onChange={handleFieldsChange}
                        required
                      />
                    </section>
                    {/* <section id="input-text">
                    <h6>Email(*必填)</h6>
                    <input
                      type="text"
                      value={fields.email}
                      onChange={handleFieldsChange}
                    />
                  </section> */}
                    {/* <section id="select">
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
                </section> */}
                    <section id="input-text">
                      <h6>地址(*必填)</h6>
                      <input
                        type="text"
                        name="order_address"
                        value={fields.order_address}
                        onChange={handleFieldsChange}
                        required
                      />
                    </section>
                    {/* <section id="checkbox-single">
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
                        <label className="col">同步收件人資料到會員資料</label>
                      </div>
                    </section> */}
                    <button type="submit" className="btn btn-light mx-1">
                      確認資訊
                    </button>

                    <div className="py-4 d-flex flex-row-reverse">
                      <button
                        type="button"
                        className="btn btn-light mx-1"
                        onClick={() => {
                          navigate('/cart', { replace: true })
                          window.scrollTo(0, 0)
                        }}
                      >
                        上一步
                      </button>
                      <button
                        type="submit"
                        className="btn btn-secondary mx-1"
                        onClick={() => {
                          navigate('/order', { replace: true })
                          window.scrollTo(0, 0)
                        }}
                      >
                        下一步
                      </button>
                    </div>
                    {/* <section id="textarea">
                  <textarea
                    className="text-muted"
                    value={textareaText}
                    onChange={(e) => {
                      setTextareaText(e.target.value)
                    }}
                  />
                </section> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
  const [delivery, setdelivery] = useState('7-11取貨')
  const deliveryOptions = ['7-11取貨', '門市自取', '宅配到府']
  const [paymoney, setpaymoney] = useState('ATM轉帳')
  const paymoneyOptions = ['ATM轉帳', '貨到付款']
  return (
    <>
      <div className="d-flex row">
        {' '}
        <div className="">
          <h2 style={{ color: '#c3b385' }}>結帳流程</h2>
        </div>
        <div>
          <h6 className="">
            <span style={{ color: '#807C70' }}>
              {' '}
              <b>[填寫運送&付款資料]</b>{' '}
            </span>
            <span style={{ color: '#97844b' }}> ->訂購明細確認->完成訂單</span>
          </h6>
        </div>
      </div>
      <div className="order_bg row">
        {/* card-a 運送方式*/}
        <div className="card-a mt-3">
          <div className="order_card col-12">
            <div className="row">
              <div className="col-md-8 cart">
                <div className="order_title d-flex align-items-center">
                  <div className="row">
                    <div className="col">
                      <h4 className="py-2">
                        <b>選擇運送方式</b>
                      </h4>
                      {/* <div className="col align-self-center text-right text-muted">
                        {cart.totalItems} items Delivery
                      </div> */}
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
        </div>
        {/* card-a 付款*/}
        <div className="card-a mt-3">
          <div className="order_card col-12">
            <div className="row">
              <div className="col-md-8 cart">
                <div className="order_title d-flex align-items-center">
                  <div className="row">
                    <div className="col">
                      <h4 className="py-2">
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
        </div>
        {/* {loader}
        {loading ? '與伺服器連接中，請稍後...' : ''} */}
        {auth.isAuth && orderform}
      </div>
    </>
  )
}

export default OrderForm
