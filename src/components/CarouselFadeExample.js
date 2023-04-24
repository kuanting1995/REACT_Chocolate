import Carousel from 'react-bootstrap/Carousel'
import home1 from '../pages/Choco_img/09-2.jpg'
import home2 from '../pages/Choco_img/18-2.jpg'

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={home1} alt="First slide" />
        <Carousel.Caption className="caro_title">
          <h5 class="slide-subtitle-f">
            Delicious <br /> Chocolate is Waiting <br /> For you{' '}
          </h5>
          <div className="caro_title2">
            <h4 class=" slide-title-f">
              本月主
              <p>打品 ღ</p>
            </h4>
            <h5 class=" slide-title-f2">
              金<p>·</p>鑽
            </h5>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={home2} alt="Second slide" />
        <Carousel.Caption>
          <h5 class="slide-subtitle-s">3/22-4/2優惠價</h5>
          <h1 class="slide-title-s">新上市 ♡</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselFadeExample
