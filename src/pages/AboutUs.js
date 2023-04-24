import Player from '../components/Player'
import '../pages/AboutUs.css'
function AboutUs() {
  return (
    <>
      <div className="container">
        <div className="aboutbg">
          <div
            id="brand_zone1"
            className="about_bg1 d-flex align-items-top justify-content-between py-4"
          >
            <div id="brand_brief" className="row text-left">
              <div class="">
                <h3>
                  <b>Brand</b>
                </h3>
                <h5 className="">
                  <b>
                    {' '}
                    來自海外的Chocolate巧克力專賣店
                    <br />
                    未展店前就已累積不少人氣
                  </b>
                </h5>
              </div>
            </div>
            <div className="px-5 align-items-bottom text-right">
              <h5>
                <b>
                  {' '}
                  海外旅遊 <br /> 必買的禮品之一。
                </b>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div
        id="brand_zone2"
        className=" d-flex align-items-center justify-content-between"
      >
        <div id="brand_brief" className="col row text-left">
          <div class="about_title2">
            {/* <div style={{ background: 'white', opacity: '.4' }}> */}
            <h3>
              <b>Chocolate 品牌故事</b>
            </h3>
            <hr />
            <p>
              無論什麼時刻只要人們吃到好吃的巧克力，每一絲煩惱都會瞬間消散，巧克力就是有這種神奇的力量，讓眾人成為忠實的「巧克力人」，若不來點濃郁的巧克力，全身就感到不舒暢。
              本店最有名的就是「牛奶巧克力」系列，使用新鮮食材製成，採用不同比例的巧克力製作，其中加入海外即時空運生乳，吃起來綿密柔軟，讓顧客忍不住一口接著一口吃，除了入口即化的滑順，種類也相當多樣。除了牛奶巧克力，也有顧客特別喜歡本店的黑巧克力，認為各種黑巧克力中的純度比例拿捏非常恰當。Chocolate巧克力專賣店以網路行銷方式達成便利及電商功能選購，讓顧客透過e化管道了解本店特色，提供多種不同選擇用以符合廣大顧客的需求。
            </p>
            {/* </div> */}
          </div>
        </div>
        <div className="col">
          <Player />
        </div>
      </div>
      {/* <div className="row text-left">
            <div class="">
              {' '}
              <h3 className="py-3">
                <b>Chocolate 品牌故事</b>
              </h3>{' '}
            </div>
            <p>
              無論什麼時刻只要人們吃到好吃的巧克力，每一絲煩惱都會瞬間消散，巧克力就是有這種神奇的力量，讓眾人成為忠實的「巧克力人」，若不來點濃郁的巧克力，全身就感到不舒暢。
              本店最有名的就是「牛奶巧克力」系列，使用新鮮食材製成，採用不同比例的巧克力製作，其中加入海外即時空運生乳，吃起來綿密柔軟，讓顧客忍不住一口接著一口吃，除了入口即化的滑順，種類也相當多樣。除了牛奶巧克力，也有顧客特別喜歡本店的黑巧克力，認為各種黑巧克力中的純度比例拿捏非常恰當。Chocolate巧克力專賣店以網路行銷方式達成便利及電商功能選購，讓顧客透過e化管道了解本店特色，提供多種不同選擇用以符合廣大顧客的需求。
            </p>
          </div> */}
    </>
  )
}

export default AboutUs
