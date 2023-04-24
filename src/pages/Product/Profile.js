import { useState, useEffect } from 'react'
import { useAuth } from '../../utils/useAuth'
import { useLoader } from '../../utils/useLoader'
import axios from 'axios'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa'
import './../../App.css'
function Profile() {
  const { auth, setAuth } = useAuth()
  const { loader, loading, setLoading } = useLoader(2000)

  const [fields, setFields] = useState({
    id: 0,
    name: '',
    email: '',
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

  const handleUpdate = async (e) => {
    e.preventDefault()

    setLoading(true)

    const res = await axios.put(`api/users/${auth.userId}`, fields)

    console.log(res)

    if (res.data.message === 'success') {
      // 2s後再跳訊息
      setTimeout(() => {
        alert('修改完成')
      }, 2000)
    } else {
      alert('有錯誤')
    }
  }

  // didMount時抓所有資料用
  const getUserData = async () => {
    setLoading(true)
    const res = await axios.get(`api/users/${auth.userId}`)

    if (res.data.message === 'success') {
      setFields(res.data.user)
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

  const profileForm = (
    <form onSubmit={handleUpdate}>
      <div>
        <label>姓名</label>
        <input
          type="text"
          name="name"
          value={fields.name}
          onChange={handleFieldsChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleFieldsChange}
          required
        />
      </div>
      <div>
        <label>帳號</label>
        <input
          type="text"
          name="username"
          value={fields.username}
          onChange={handleFieldsChange}
          required
        />
      </div>
      <div>
        <label>密碼</label>
        <input
          type={passwordFieldType}
          name="password"
          value={fields.password}
          onChange={handleFieldsChange}
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
      <button className="btn btn-light" type="submit">
        修改
      </button>
    </form>
  )

  return (
    <>
      <div className="container">
        <div className="col-9 profile">
          <h1>個人資料</h1>
          {loader}
          {loading ? '與伺服器連接中，請稍後...' : ''}
          {/* 要登入才會呈現個人資料表單 */}
          {auth.isAuth && profileForm}
        </div>
      </div>
    </>
  )
}

export default Profile
