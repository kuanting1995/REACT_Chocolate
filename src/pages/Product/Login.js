import { useState } from 'react'
import { useAuth } from '../../utils/useAuth'
import { useLoader } from '../../utils/useLoader'
import axios from 'axios'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import './../../App.css'
function Login() {
  const { auth, setAuth } = useAuth()
  const { loader, loading, setLoading } = useLoader(2000)

  const [fields, setFields] = useState({
    username: '',
    password: '',
  })

  const [passwordFieldType, setPasswordFieldType] = useState('password')

  const handleFieldsChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = async () => {
    setLoading(true)

    const res = await axios.post('api/users/login', fields)
    console.log(res)

    if (res.data.message === 'success') {
      const newAuth = {
        isAuth: true,
        userId: res.data.user.id,
      }

      setAuth(newAuth)
    } else {
      alert('有錯誤')
    }
  }

  const handleLogout = async () => {
    setLoading(true)

    const res = await axios.post('api/users/logout', {
      withCredentials: true,
    })

    console.log(res)

    // 登出成功
    if (res.data.message === 'success') {
      const newAuth = { isAuth: false, userId: null }
      setAuth(newAuth)
    } else {
      alert('有錯誤')
    }
  }

  const loginForm = (
    <>
      <div>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldsChange}
        />
      </div>
      <div>
        <label>密碼</label>
        <input
          type={passwordFieldType}
          name="password"
          value={fields.password}
          onChange={handleFieldsChange}
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
      <button className="btn btn-light" type="button" onClick={handleLogin}>
        登入
      </button>
    </>
  )

  const logoutForm = (
    <button className="btn btn-light" onClick={handleLogout}>
      登出
    </button>
  )

  // const testBlock = (
  //   <>
  //     <hr />
  //     <p>測試用</p>
  //     <button
  //       onClick={() => {
  //         setFields({
  //           username: 'herry',
  //           password: '12345',
  //         })
  //       }}
  //     >
  //       填入可正確登入資料
  //     </button>
  //     <button
  //       onClick={() => {
  //         setFields({
  //           username: '',
  //           password: '',
  //         })
  //       }}
  //     >
  //       清空
  //     </button>
  //   </>
  // )

  const display = auth.isAuth ? logoutForm : loginForm

  return (
    <>
      <div className="container">
        <div className="col-9 login">
          <h1>會員登入 Login</h1>
          {loader}
          {loading ? '與伺服器連接中，請稍後...' : display}
          {/* {testBlock} */}
        </div>
      </div>
    </>
  )
}

export default Login
