import { useState } from 'react'
import { useAuth } from '../../utils/useAuth'
import { useLoader } from '../../utils/useLoader'
import axios from 'axios'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import './../../App.css'
// 測試資料使用
import { faker } from '@faker-js/faker'

function Register() {
  const { auth, setAuth } = useAuth()
  const { loader, loading, setLoading } = useLoader(2000)

  const [fields, setFields] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  })

  const [passwordFieldType, setPasswordFieldType] = useState('password')

  const [confirmPasswordFieldType, setConfirmPasswordFieldType] =
    useState('password')

  const orderFieldsChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    })
  }

  const orderRegister = async (e) => {
    e.preventDefault()

    if (fields.confirmPassword !== fields.password) {
      alert('密碼與確認密碼需要一致')
      return
    }

    setLoading(true)

    const { confirmPassword, ...registerFields } = fields

    const res = await axios.post('api/users', registerFields)

    console.log(res)

    if (res.data.message === 'success') {
      // 2s後再跳訊息
      setTimeout(() => {
        alert('註冊完成')
      }, 2000)
    } else {
      alert('有錯誤')
    }
  }

  const registerForm = (
    <form onSubmit={orderRegister}>
      <div>
        <label>姓名</label>
        <input
          type="text"
          name="name"
          value={fields.name}
          onChange={orderFieldsChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={orderFieldsChange}
          required
        />
      </div>
      <div>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={orderFieldsChange}
          required
        />
      </div>
      <div>
        <label>密碼</label>
        <input
          type={passwordFieldType}
          name="password"
          value={fields.password}
          onChange={orderFieldsChange}
          required
        />
        <button
          className="btn btn-light my-2"
          type="button"
          onClick={() => {
            setPasswordFieldType(
              passwordFieldType === 'text' ? 'password' : 'text'
            )
          }}
        >
          {passwordFieldType === 'text' ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
      <div>
        <label>確認密碼</label>
        <input
          type={confirmPasswordFieldType}
          name="confirmPassword"
          value={fields.confirmPassword}
          onChange={orderFieldsChange}
          required
        />
        <button
          className="btn btn-light my-2"
          type="button"
          onClick={() => {
            setConfirmPasswordFieldType(
              confirmPasswordFieldType === 'text' ? 'password' : 'text'
            )
          }}
        >
          {confirmPasswordFieldType === 'text' ? (
            <FaRegEyeSlash />
          ) : (
            <FaRegEye />
          )}
        </button>
      </div>
      <button className="btn btn-light" type="submit">
        註冊
      </button>
    </form>
  )

  const testBlock = (
    <>
      <hr />
      <p>測試用</p>
      <button
        onClick={() => {
          const name = faker.name.findName() // Rowan Nikolaus
          const email = faker.internet.email() // Kassandra.Haley@erich.biz
          const password = faker.internet.password(8) // => "UYdqZrTqIEJuENl"
          const username = faker.internet.userName() // 'Nettie_Zboncak40'

          setFields({
            name,
            email,
            username,
            password,
            confirmPassword: password,
          })
        }}
      >
        填入可正確登入資料
      </button>
      <button
        onClick={() => {
          setFields({
            name: '',
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
          })
        }}
      >
        清空
      </button>
    </>
  )

  return (
    <>
      <div className="container">
        <div className="col-9 register">
          <h1>註冊</h1>
          {loader}
          {loading ? '與伺服器連接中，請稍後...' : ''}
          {!auth.isAuth && registerForm}
        </div>
      </div>
    </>
  )
}

export default Register
