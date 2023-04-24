import { useState, useEffect } from 'react'
import axios from 'axios'
import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useCart } from 'utils/useCart'
import './User.css'

// 要使用chunk(分塊)函式用
import _ from 'lodash'
// 商品範例
import products from 'data/products.json'

function ProductList(props) {
  // 對話盒使用
  const [show, setShow] = useState(false)
  // 對話盒中的商品名稱
  const [productName, setProductName] = useState('')

  const navigate = useNavigate()

  const { addItem } = useCart()

  const [users, setUsers] = useState([]) // 注意要保持此狀態一直是陣列

  // 呈現用
  const [usersDisplay, setUsersDisplay] = useState([])

  // 文字輸入框可控表單元件使用
  const [inputText, setInputText] = useState('')

  // 真正用於搜尋過濾的狀態
  const [keyword, setKeyword] = useState('')

  const ageOptions = ['牛奶巧克力', '白巧克力', '黑巧克力']
  const [ageFilter, setAgeFilter] = useState('牛奶巧克力')

  const [sortType, setSortType] = useState(3)

  // 分頁用
  // pageNow 目前頁號
  // perPage 每頁多少數量
  // pageTotal 目前有多少頁
  const [pageNow, setPageNow] = useState(1) // 預設為第1頁
  const [perPage, setPerPage] = useState(3) // 預設為每頁有2筆
  const [pageTotal, setPageTotal] = useState(0) // 預設總頁數為0

  const [isLoading, setIsLoading] = useState(true)

  //向伺服器用get獲取資料
  const getUsers = async () => {
    const res = await axios.get(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
    )

    setUsers(res.data)
  }

  // 純函式-傳入資料陣列，以keyword進行過濾 => 回傳過濾後的資料陣列
  const filterByKeyword = (users, keyword) => {
    return users.filter((v, i) => {
      return v.name.includes(keyword)
    })
  }

  // 純函式-傳入資料陣列，以ageFilter進行過濾 => 回傳過濾後的資料陣列
  const filterByAge = (users, ageFilter) => {
    switch (ageFilter) {
      case '白巧克力':
        return users.filter((v, i) => {
          return v.age === '白巧克力'
        })
      case '黑巧克力':
        return users.filter((v, i) => {
          return v.age === '黑巧克力'
        })
      case '牛奶巧克力':
      default:
        return users
    }
  }

  // 純函式 排序用
  const sortByType = (users, type) => {
    switch (type) {
      // 以age排序-由小至大 => type=1
      case 1:
        return [...users].sort((a, b) => a.age - b.age)
      // 以age排序-由大至小 => type=2
      case 2:
        return [...users].sort((a, b) => b.age - a.age)
      // 以id排序-由小至大 => type=3 (預設)
      case 3:
        return [...users].sort((a, b) => Number(a.id) - Number(b.id))
      // 以id排序-由大至小 => type=4
      case 4:
        return [...users].sort((a, b) => Number(b.id) - Number(a.id))
      // 以id排序-由小至大 => type=3 (預設)
      default:
        return [...users].sort((a, b) => Number(a.id) - Number(b.id))
    }
  }

  // 排序的類型分成2個的寫法
  // const sortByFieldAndDirection = (users, field, direction = 'asc') => {
  //   switch (direction) {
  //     case 'desc':
  //       return [...users].sort((a, b) => Number(b[field]) - Number(a[field]))
  //     case 'asc':
  //     default:
  //       return [...users].sort((a, b) => Number(a[field]) - Number(b[field]))
  //   }
  // }

  // didMount (After first render，初次render之後執行一次)
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    // 作keyword過濾
    let newUsers = filterByKeyword(users, keyword)

    // 作age選項過濾
    newUsers = filterByAge(newUsers, ageFilter)

    // 作sort排序
    newUsers = sortByType(newUsers, sortType)
    // newUsers = sortByFieldAndDirection(newUsers, sortField, sortDirection)

    // 拆分頁
    //  _.chunk([1,2,3,4], 2) => [[1,2],[3,4]]
    const pageArray = _.chunk(newUsers, perPage)

    if (pageArray.length > 0) {
      setUsersDisplay(pageArray)
      setPageTotal(pageArray.length)
      setPageNow(1) //設回第一頁
    } else {
      setUsersDisplay([])
      setPageTotal(0)
    }
  }, [users, keyword, ageFilter, sortType])

  // 搭配css的純載入指示動畫
  const loader = (
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const showModal = (name) => {
    setProductName('產品：' + name + '已成功加入購物車')
    handleShow()
  }

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          繼續購物
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            // 導向購物車頁面
            // props.history.push('/')
            navigate('/', { replace: true })
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const display = (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.map((v, i) => {
        return (
          <div className="col" key={v.id}>
            <div className="card">
              <img src={v.picture} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{v.name}</h5>
                <p className="card-text text-danger">NTD {v.price}元</p>
              </div>
              <div className="card-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    // 商品原本無數量屬性(quantity)，要先加上
                    const item = { ...v, quantity: 1 }
                    // 注意: 重覆加入會自動+1產品數量
                    addItem(item)
                    // 呈現跳出對話盒
                    showModal(v.name)
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )

  return (
    <>
      <h1>商品頁</h1>

      <section id="search-input">
        <div>
          <input
            type="text"
            placeholder="輸入商品名稱"
            // 可控表單元件要求-1
            value={inputText}
            onChange={(e) => {
              // 可控表單元件要求-2
              setInputText(e.target.value)

              // 如果使用者清除所有輸入時要回復為原本列表
              // 注意：這裡要以e.target.value來判斷，"不可"使用inputText(異步，尚未更動)
              if (e.target.value === '') {
                setKeyword('')
              }
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setKeyword(inputText)
              }
            }}
          />
          <button
            onClick={() => {
              setKeyword(inputText)
            }}
          >
            搜尋
          </button>
          {/* <label>按下Enter進行搜尋</label> */}
        </div>
      </section>
      <br></br>
      <h5>巧克力分類</h5>
      <section id="age-radio-group">
        {ageOptions.map((v, i) => {
          return (
            <span key={i}>
              <input
                type="radio"
                value={v}
                checked={ageFilter === v}
                onChange={(e) => {
                  setAgeFilter(e.target.value)
                }}
              />
              <label>{v}</label>
            </span>
          )
        })}
      </section>
      <section id="sort-buttons">
        <button
          onClick={() => {
            setSortType(1)
          }}
        >
          商品價格由小到大
        </button>
        <button
          onClick={() => {
            setSortType(2)
          }}
        >
          商品價格由大到小
        </button>
        {/* <button
          onClick={() => {
            setSortType(3)
          }}
        >
          id 小到大
        </button>
        <button
          onClick={() => {
            setSortType(4)
          }}
        >
          id 大到小
        </button> */}
      </section>

      {/* <p className="text-nowrap bd-highlight">/pages/Product/ProductList.js</p> */}
      {messageModal}
      {display}
      <section id="user-data-table">{isLoading ? loader : display}</section>
      <section id="pagination">
        <div className="pagination">
          {Array(pageTotal)
            .fill(1)
            .map((v, i) => {
              return (
                <a
                  key={i}
                  href="#/"
                  onClick={() => {
                    setPageNow(i + 1)
                  }}
                >
                  {i + 1}
                </a>
              )
            })}
        </div>
      </section>
    </>
  )
}

export default ProductList
