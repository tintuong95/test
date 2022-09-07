import React from 'react';

import CardBestProduct from '../../components/common/CartBestProduct/index.js';
import Navbar from '../../components/common/Navbar/index.js';
import card1 from "../../assets/card/best-image-01.png"
import card2 from "../../assets/card/best-image-02.png";
import card3 from "../../assets/card/best-image-03.png";


import "./main.css"
import CardItem from '../../components/common/CardItem/index.js';
import Footer from '../../components/common/Footer/index.js';

const Main = () => {
   function detectMob() {
     const toMatch = [
       /Android/i,
       /webOS/i,
       /iPhone/i,
       /iPad/i,
       /iPod/i,
       /BlackBerry/i,
       /Windows Phone/i,
     ];

     return toMatch.some((toMatchItem) => {
       return navigator.userAgent.match(toMatchItem);
     });
   }
    return (
      <>
        <Navbar />
        <div className="main_banner"></div>
        <div className="introduction">
          <p className="introduction-title">What Happened!</p>
          <p className="introduction-description ">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first step
            to your brand's success. How to create mobile-optimized videos in
            minutes.
          </p>
        </div>
        <div className="best_product">
          <p className="best_product_title ">Best Product</p>
          <p className="best_product_description ">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
          <span></span>
          <div className="list-card">
            <CardBestProduct image={card1} />
            <CardBestProduct image={card2} />
            <CardBestProduct image={card3} />
          </div>
        </div>
        <div className="list-product">
          {detectMob() ? (
            <>
              <CardItem img={require("../../assets/card/img-01.png")} />
              <CardItem img={require("../../assets/card/img_02.png")} />
              <CardItem img={require("../../assets/card/img_03.png")} />
              <CardItem img={require("../../assets/card/img_04.png")} />
              <CardItem img={require("../../assets/card/img_05.png")} />
              <CardItem img={require("../../assets/card/img_06.png")} />
              <CardItem img={require("../../assets/card/img_07.png")} />
              <CardItem img={require("../../assets/card/img_08.png")} />
              <CardItem img={require("../../assets/card/img_09.png")} />
            </>
          ) : (
            <>
              <CardItem img={require("../../assets/card/img-01.png")} />
              <CardItem img={require("../../assets/card/img_02.png")} />
              <CardItem img={require("../../assets/card/img_03.png")} />
              <CardItem img={require("../../assets/card/img_04.png")} />
              <CardItem img={require("../../assets/card/img_05.png")} />
              <CardItem img={require("../../assets/card/img_06.png")} />
              <CardItem img={require("../../assets/card/img_07.png")} />
              <CardItem img={require("../../assets/card/img_08.png")} />
              <CardItem img={require("../../assets/card/img_09.png")} />
              <CardItem img={require("../../assets/card/img_10.png")} />
              <CardItem img={require("../../assets/card/img_11.png")} />
              <CardItem img={require("../../assets/card/img_12.png")} />
              <CardItem img={require("../../assets/card/img_13.png")} />
              <CardItem img={require("../../assets/card/img_14.png")} />
              <CardItem img={require("../../assets/card/img_15.png")} />
              <CardItem img={require("../../assets/card/img_16.png")} />
              <CardItem img={require("../../assets/card/img_17.png")} />
              <CardItem img={require("../../assets/card/img_18.png")} />
              <CardItem img={require("../../assets/card/img_19.png")} />
              <CardItem img={require("../../assets/card/img_20.png")} />
              <CardItem img={require("../../assets/card/img_21.png")} />
              <CardItem img={require("../../assets/card/img_22.png")} />
              <CardItem img={require("../../assets/card/img_23.png")} />
              <CardItem img={require("../../assets/card/img_24.png")} />
              <CardItem img={require("../../assets/card/img_25.png")} />
            </>
          )}
        </div>
        <div className="see-more">
          <button className="btn-see-more">SEE MORE</button>
        </div>
        <div className="brand-story">
          <p className="brand-story-title">BRAND STORY</p>
          <p className="brand-story-description">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
          <div className="brand-story-box">
            <div className="brand-story-box-head">
              <hr />
              <hr />
            </div>
            <div className="brand-story-box-content">
              <div className="brand-story-box-content-left"> </div>
              <div className="brand-story-box-content-right">
                <p className="brand-story-box-content-right-title">
                  What Happened’s Brand story
                </p>
                <p className="brand-story-box-content-right-description">
                  청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일
                  무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에
                  광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한
                  아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의
                  타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을
                  수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을
                  운다.
                </p>
                <button className="btn-see-more">SEE MORE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="happened-issue">
          <p className="happened-issue-title">Happened’s issue</p>
          <p className="happened-issue-description">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
          <div className="see-more">
            <button className="btn-see-more">SEE MORE</button>
          </div>
        </div>
        <div className="what-happened">
          <p className="happened-issue-title mt-148">WHAT HAPPENED</p>
          <p className="happened-issue-description">
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
          <div className="see-more">
            <button className="btn-see-more">SEE MORE</button>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default Main;
