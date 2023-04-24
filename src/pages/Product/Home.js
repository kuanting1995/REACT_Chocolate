import { useAuth } from '../../utils/useAuth'
import CarouselFadeExample from '../../components/CarouselFadeExample'
import about from '../Choco_img/34.jpg'
import dark from '../Choco_img/00.jpg'
import white from '../Choco_img/white.jpeg'
import milk from '../Choco_img/milk1.jpg'
import box from '../Choco_img/box.jpg'
import hotA from '../Choco_img/02.jpg'
import hotB from '../Choco_img/14.jpg'
import hotC from '../Choco_img/10.jpg'
import store from '../Choco_img/store.jpg'
import service from '../Choco_img/22.jpg'
import './Home.css'
import { useNavigate } from 'react-router-dom'
function Home() {
  const { auth } = useAuth()
  const navigate = useNavigate()
  return (
    <>
      <CarouselFadeExample />

      <div class="container" id="home-about">
        <div class="row">
          {/* 關於我們 */}
          <div class="row mb-4 mb-md-0 pt-4 px-2 align-items-center">
            <div class="col-12 col-md-6">
              <img src={about} class="img-fluid mb-2" alt="34" />
            </div>
            <div class="col-12 col-md-6 order-md-1 d-md-flex flex-md-column align-items-md-end">
              <h1 class="fw-bold">關於我們</h1>
              <p class="fw-bold">高純度可可豆 | 研磨</p>
              <p>多款手工巧克力</p>
              <button
                type="button"
                class="btn btn-outline-dark"
                onClick={() => {
                  navigate('/about', { replace: true })
                  window.scrollTo(0, 0)
                }}
              >
                看品牌故事<i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
          {/* 分類商品 */}
          <span className="home-border mt-2 mb-5">
            <h3 class="product-c text-center fw-bold">分類商品</h3>
          </span>
          <div class="row px-2 mb-4">
            {/* <div class="col-6 col-md-3">
              <img
                class="img-fluid mb-1 rounded-circle"
                src={dark}
                alt="黑巧克力"
              />
              <h5>黑巧克力</h5>
            </div> */}
            <div class="col-6 col-md-3 position-relative ">
              <img
                class="img-fluid mb-1 opacity-75 rounded-circle"
                src={dark}
                alt=""
              />
              <div class="position-absolute top-50 start-50 translate-middle">
                <h3 className="text-light">黑巧克力</h3>
              </div>
            </div>
            <div class="col-6 col-md-3 position-relative ">
              <img
                class="img-fluid mb-1 opacity-75 rounded-circle"
                src={white}
                alt=""
              />
              <div class="position-absolute top-50 start-50 translate-middle">
                <div style={{ color: '#5A3B34', opacity: '.8' }}>
                  <h3 class="text">白巧克力</h3>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-3 position-relative ">
              <img
                class="img-fluid mb-1 opacity-75 rounded-circle"
                src={milk}
                alt=""
              />
              <div class="position-absolute top-50 start-50 translate-middle">
                <h3 class="text-light">牛奶巧克力</h3>
              </div>
            </div>
            <div class="col-6 col-md-3 position-relative ">
              <img
                class="img-fluid mb-1 opacity-75 rounded-circle"
                src={box}
                alt=""
              />
              <div class="position-absolute top-50 start-50 translate-middle">
                <h3 class="text-light">禮盒</h3>
              </div>
            </div>
          </div>
          {/* 人氣商品 */}
          <div class="container mb-md-3">
            <div class="row px-2">
              <span className="home-border mt-2 mb-5">
                <h3 class="product-c text-center fw-bold">人氣推薦</h3>
              </span>
              <div class="col-6 col-md-4 mb-4">
                <img class="w-100" src={hotA} alt="" />
              </div>
              <div class="col-6 col-md-4 mb-4">
                <img class="w-100" src={hotB} alt="" />
              </div>
              <div class="col-6 col-md-4 position-relative mb-4">
                <img class="w-100" src={hotC} alt="" />
                <div class="position-absolute top-50 start-50 translate-middle">
                  {/* <h3 class="text-light">巧克力</h3> */}
                </div>
              </div>
              <div class="col-6 col-md-4 position-relative mb-4">
                <img
                  class="w-100 opacity-75"
                  src="./img/408C2B18-E1D7-44F2-A862-C1743ED1CBEA-35787-00002939DEA66631_a27fa805-cb49-4c4d-8291-3e8b99d44cca_1512x.webp"
                  alt=""
                />
              </div>
              <div class="col-6 col-md-4 position-relative mb-4">
                <img
                  class="w-100 opacity-75"
                  src="./img/408C2B18-E1D7-44F2-A862-C1743ED1CBEA-35787-00002939DEA66631_a27fa805-cb49-4c4d-8291-3e8b99d44cca_1512x.webp"
                  alt=""
                />
                <div class="position-absolute top-50 start-50 translate-middle">
                  <h3 class="text-light">巧克力</h3>
                </div>
              </div>
              <div class="col-6 col-md-4 position-relative mb-4">
                <img
                  class="w-100 opacity-75"
                  src="./img/408C2B18-E1D7-44F2-A862-C1743ED1CBEA-35787-00002939DEA66631_a27fa805-cb49-4c4d-8291-3e8b99d44cca_1512x.webp"
                  alt=""
                />
                <div class="position-absolute top-50 start-50 translate-middle">
                  <h3 class="text-light">巧克力</h3>
                </div>
              </div>
            </div>
          </div>
          {/* 商店資訊 */}
          <div class="store-service">
            <div class="row mb-4 mb-md-0 px-2 align-items-center">
              <div class="col-12 col-md-6">
                <img class="img-fluid mb-4" src={store} alt="" />
              </div>
              <div class="col-12 col-md-6 order-md-1 d-md-flex flex-md-column align-items-md-end">
                <h1 class="fw-bold">店鋪一覽</h1>
                <p class="fw-bold">高純度可可豆 | 研磨</p>
                <p>多款手工巧克力</p>
                <button type="button" class="btn btn-outline-dark">
                  看更多<i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div class="row mb-4 px-2 align-items-center">
              <div class="col-12 col-md-6 order-md-2">
                <img class="img-fluid mb-4" src={service} alt="" />
              </div>
              <div class="col-12 col-md-6 order-md-1 d-md-flex flex-md-column align-items-md-start">
                <h1 class="fw-bold">禮盒包裝服務</h1>
                <p>巧克力儀式</p>
                <p>送給自己 送給最愛的人</p>
                <button type="button" class="btn btn-outline-dark">
                  看更多<i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-secondary"
        onClick={() => {
          window.scrollTo(0, 0)
        }}
      >
        top
      </button>
      <h6>{auth.isAuth ? ' ' : ' '}</h6>
    </>
  )
}

export default Home
