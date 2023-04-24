import { useCart } from '../../utils/useCart'
import { useNavigate } from 'react-router-dom'

function ListItemsWithHook() {
  // 使用hooks 解出所需的狀態與函式(自context)
  const { cart, items, plusOne, minusOne, removeItem } = useCart()
  const navigate = useNavigate()
  return (
    <div>
      <table
        className="table"
        cellPadding="0"
        border="0"
        width="100%"
        cellSpacing="0"
      >
        <thead>
          <tr className="">
            <th>商品id</th>
            <th>商品明細</th>
            <th>單價</th>
            <th>數量</th>
            <th>小計</th>
            <th>移除</th>
          </tr>
        </thead>
        <tbody>
          {items.map((v, i) => {
            return (
              <tr key={v.id} className="">
                <td>{v.id}</td>
                <td className="d-flex align-items-center">
                  <div className="">
                    <img src={v.picture} />
                  </div>
                  <div className="px-2">{v.name}</div>
                </td>
                <td>{v.price}</td>
                <td>
                  <div className="btn-group mr-2" role="group">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        minusOne(v.id)
                      }}
                    >
                      -
                    </button>
                    <button type="button" className="btn btn-light">
                      {v.quantity}
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => {
                        plusOne(v.id)
                      }}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td>{v.itemTotal}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={() => {
                      removeItem(v.id)
                    }}
                  >
                    x
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <div className="d-flex justify-content-end px-5">
          商品數: 共{cart.totalItems}項
          <br /> 小計金額: ${cart.cartTotal}
          <br />
          {cart.isEmpty && '[購物車無商品]'}
        </div>
        <hr />
        <div className="d-flex justify-content-end px-5">
          {' '}
          <button
            type="button"
            className="btn btn-outline-dark mx-1"
            onClick={() => {
              navigate('/product-pages', { replace: true })
            }}
          >
            繼續購物
          </button>
          <button
            type="button"
            className="btn btn-outline-dark mx-1"
            onClick={() => {
              navigate('/orderform', { replace: true })
            }}
          >
            前往結帳
          </button>
        </div>
      </div>
    </div>
  )
}

export default ListItemsWithHook
