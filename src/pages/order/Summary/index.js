// import { useNavigate } from 'react-router-dom'
function Summary({ totalNumber = 0, totalPrice = 0 }) {
  return (
    <>
      <div className="col-md-4 summary">
        <div>
          <h5>
            <b>付款摘要</b>
          </h5>
        </div>
        <hr />
        <div className="row">
          <div className="col pl-0">
            共<span style={{ color: '#c38596' }}> {totalNumber} </span>
            項目
          </div>
        </div>

        <div className="row  bt-1-ptb-2v">
          <div className="col-8">本訂單需付款金額</div>
          <div className="col text-right fs-6" style={{ color: '#c38596' }}>
            NT${totalPrice}
          </div>
        </div>
      </div>
    </>
  )
}

export default Summary
