import React, {useEffect, useRef} from "react";
import "./Appgsap.css";
import {TimelineLite ,TweenMax, Power3} from 'gsap/all';

import imgGirl from "./seigneur1.jpg";
import imgBoy from "./seigneur.png";
import arrow from './logoseigneur2.jpg';

function Appgsap() {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  let tl = new TimelineLite({ delay: .9});
  
  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]
    const boyImage = images.lastElementChild;
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, {css: {visibility: 'visible'}})

    //Images Animation
    tl.from(girlImage, 1.2, {y: 1280, ease: Power3.easeOut},'Start')
    .from(girlImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
    .from(boyImage, 1.4, {y: 1280, ease: Power3.easeOut}, .2)
    .from(boyImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:Power3.easeOut,
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)

  }, [tl])

  return (
    <div className="hero" ref={el => app = el}>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner"> </div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">All we have to decide is what to</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">do with the time that is given us</div>
                </div>
              </h1>
              <p> </p>
              <div className="btn-row">
                <button className="explore-button"> you shall not pass..
                  <div className="arrow-icon">
                  <img src={arrow} alt="row"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image girl">
                <img src={imgGirl} alt="girl" />
              </div>
              <div className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appgsap;