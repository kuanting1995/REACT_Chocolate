import { useCart } from '../../../utils/useCart'
function OrderItem() {
  const { items } = useCart()
  return (
    <>
      <div className="row border-top border-bottom">
        {items.map((v, i) => {
          return (
            <div key={v.id} className="p-1 row main align-items-center">
              <div className="col-7 align-items-center row">
                <div className="col-4">
                  <img className="img-fluid" src={v.picture} alt="" />
                </div>
                <div className="col-8">
                  <div className="row">{v.name}</div>
                </div>
              </div>
              <div className="col">{v.price} </div>
              <div className="col-2">
                <p className="border mx-2 px-2 my-1">{v.quantity} 入</p>
              </div>
              <div className="col">${v.itemTotal} </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default OrderItem
