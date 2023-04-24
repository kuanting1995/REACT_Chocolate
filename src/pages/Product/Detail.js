import { useCart } from '../../utils/useCart'
function Detail() {
  const { items } = useCart()
  return (
    <>
      <div className="row border-top border-bottom">
        {items.map((v, i) => {
          return (
            <div key={v.id} className="p-1 row main align-items-center">
              <div className="col-12 align-items-center row">
                <div className="col-6">
                  <img className="img-fluid" src={v.picture} alt="" />
                </div>
                <div className="col-8">
                  <div className="row">名稱：{v.name}</div>
                </div>

                <div className="col-8">價格：${v.price} </div>
                <div className="col-8">
                  「牛奶巧克力」系列，使用新鮮食材製成，採用不同比例的巧克力製作，其中加入海外即時空運生乳，吃起來綿密柔軟，讓顧客忍不住一口接著一口吃
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Detail
