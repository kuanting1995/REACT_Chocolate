import React from 'react'
import iconIns from '../components/icon/sns_instagram_renew.png'
import iconFB from '../components/icon/sns_facebook_renew.png'
import iconYT from '../components/icon/sns_youtube_renew.png'
import './MyFooter.css'
function MyFooter(props) {
  return (
    <>
      <footer className="footer mt-auto py-3">
        {/* <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div> */}
        <div className="footercontainer">
          <div class="footerwrap1">
            <nav>
              <ul
                class="info"
                style={{
                  color: '#97844b',
                  fontWeight: 'bold',
                }}
              >
                <li class="d-none d-lg-block mx-2">關於我們</li>
                <li class="d-none d-lg-block mx-2">銷售通路</li>
                <li class="d-none d-lg-block mx-2">聯繫我們</li>
              </ul>
            </nav>

            <div class="footericon">
              <div class="footericon_wrap">
                <div>
                  <img src={iconIns} alt="" />
                </div>
                <div>
                  <img src={iconFB} />
                </div>
                <div>
                  <img src={iconYT} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="footerwrap2">
            <div class="T1">
              <p class="d-none d-lg-block mx-2">
                客服專線：(02)2655-2049
                <span>
                  <p>洽詢時間：週一至週五 9:00-12:00；13:00-17:00</p>
                </span>
              </p>
              <p>
                <span className="mx-2">Copyright 2022 @</span>
                All RIGHTS RESERVED.
              </p>
            </div>
            <div>
              <select
                name="lang"
                class="d-none d-lg-block"
                style={{
                  color: '#97844b',
                }}
              >
                <option value="INT">INTERNATIONAL/ENGLISH</option>
                <option value="CH">中文</option>
                <option value="KR">한국/한국어</option>
                <option value="IN">INDONESIA/BAHASA INDONESIA</option>
                <option value="MA">MALAYSIA/ENGLISH</option>
                <option value="TH">ประเทศไทย/ไทย</option>
                <option value="US">UNITED STATES/ENGLISH</option>
                <option value="VE">VIỆT NAM/TIẾNG VIỆT</option>
              </select>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default MyFooter
