import './Loader.scss'

function Loader({ loading = false }) {
  return (
    <div
      className="loader-p"
      style={{ display: loading ? 'block' : 'none' }}
    >
      {/* <div className="loader loader--spinningDisc"></div> */}
      {/* <div className="loader loader--audioWave"></div> */}
      {/* <div className="loader loader--snake"></div> */}
      <div className="loader loader--glisteningWindow"></div>
      {/* <div className="loader loader--circularSquare"></div> */}
    </div>
  )
}

export default Loader
