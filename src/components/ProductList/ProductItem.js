import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import _ from 'lodash'
import { useCart } from '../../utils/useCart'
import products from '../../data/products.json'
import './../../App.css'
function ProductItem(props) {
  const { id, name, picture, price, tags, button } = props.product
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')
  const { addItem } = useCart()
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
            navigate('/cart', { replace: true })
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const displayButton = (
    <>
      <div className="card-footer">
        <button
          type="button"
          className=" btn btn-success"
          onClick={() => {
            // 商品原本無數量屬性(quantity)，要先加上
            const item = { ...props.product, quantity: 1 }
            // 注意: 重覆加入會自動+1產品數量
            addItem(item)
            // 呈現跳出對話盒
            showModal(props.product.name)
          }}
        >
          加入購物車
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* <tr>
        <td className="number text-center">{id}</td>
        <td className="image">
          <img src={picture} alt="" />
        </td>
        <td className="product">
          <strong>{name}</strong>
        </td>
        <td className="rate text-right">{tags}</td>
        <td className="price text-right">${price}</td>
        {messageModal}
        {displayButton}
      </tr> */}
      <div className="row">
        <div className="card">
          <div className="like">
            <input type="checkbox" style={{ width: '50px', height: '50px' }} />
            <span
              className="collect"
              onClick={() => {
                navigate('/collect', { replace: true })
              }}
            >
              收藏
            </span>
          </div>
          {/* <i
            class="fa-regular fa-heart"
            onClick={() => {
              navigate('/collect', { replace: true })
            }}
          ></i> */}
          <img
            style={{ width: '75%', paddingLeft: '50px' }}
            src={picture}
            alt=""
          />
          <div className="card-body">
            <h6 className="card-title" style={{ paddingLeft: '35px' }}>
              {tags}
            </h6>
            <h5 className="card-text">{name}</h5>
            <h5 className="card-price" style={{ paddingLeft: '50px' }}>
              ${price}
            </h5>
            {messageModal}
            {displayButton}
            <button
              type="button"
              className="navigate-detail btn btn-outline-dark mx-1"
              onClick={() => {
                navigate('/detail', { replace: true })
              }}
            >
              <span className="navigate-text">商品詳細頁</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem
