var React = require('react');
var DriveIn = require('react-drive-in');

import CouponCard from './CouponCard';
import ActionIcons from './ActionIcons';
import {RouteHandler, State} from 'react-router';

var App = React.createClass({

  getInitialState: function() {
    return {
      playingItem: 1  
    };
  },

  componentDidMount: function() {
    var branding = this.refs.branding.getDOMNode();
    var downarrow = document.querySelector('.downarrow');
    var pausebutton = document.querySelector('.pause');
    var bigSearch = this.refs.bigSearch.getDOMNode();

    branding.classList.remove('unresolved');
    downarrow.classList.remove('unresolved');
    bigSearch.classList.remove('unresolved');

    branding.classList.add('resolving');    
    bigSearch.classList.add('resolving');    

    pausebutton.addEventListener('click', () => {
      var dv = this.refs.dv;
      if (dv.state.playing)
        dv.pause();
      else
        dv.play();
    })

    downarrow.addEventListener('click', () => {
      var page = document.querySelector('.page');
      scrollTo(window.innerHeight, () => {

      }, 700);
    })

    setTimeout(()=>{
      branding.classList.remove('resolving');
      bigSearch.classList.remove('resolving');    
    }, 1600)

    window.addEventListener('keyup', (e) => {
      var dv = this.refs.dv;
      var k = e.keyCode;
      if (k === 37) return dv.play(dv.state.currentItem - 1);
      if (k === 38) return dv[dv.state.playing ? 'pause' : 'play']();
      if (k === 39) return dv.play(dv.state.currentItem + 1);
    })

  },

  mixins: [ State ],
 
  render: function() {
 
    var playlist = [
      'video/MVI_0481.mp4',
      'video/statefair.mp4',
      'http://s3.amazonaws.com/vpdms-media-us/user-media/stock-footage-two-brothers-hug-and-smile-while-on-a-suburban-sidewalk.mp4',
      'http://s3.amazonaws.com/vpdms-media-us/user-media/stock-footage-young-boy-in-front-of-lemonade-stand.mp4',
      'http://s3.amazonaws.com/vpdms-media-us/user-media/stock-footage-mother-giving-daughter-piggyback-as-they-spin-around-in-the-garden-in-slow-motion.mp4',
      'http://s3.amazonaws.com/vpdms-media-us/user-media/stock-footage-customers-browsing-and-shopping-in-local-gift-store-purchasing-products-and-goods-from-shop.mp4',
      'video/4664993.mp4',
      'video/5528147.mp4',
      'video/2708816.mp4',
      'video/4770209.mp4',
      'video/3519014.mp4',
      'video/5798342.mp4',
      
    ]

    return (
      <div className="layout vertical fit page" onScroll={this.vscrolling}>

        <div ref="headerBar" className="header-bar">
          <div className="container layout horizontal">
            <div className="flex"><img className="logo-small" src="images/vplogo-rev.png"/></div>
            <img className="search-icon" src="images/search-white.svg"/>
          </div>
        </div>

        <div className="fsvid" ref="fsvid">
          <DriveIn
            ref="dv"
            showPlaylist={playlist}
            loop={true}
            poster={{src:'/images/primarybg.png'}}
          />
        </div>

        <div className="branding unresolved" ref="branding">
          <img ref="vplogo" className="logo" src="images/vplogo-rev.png"/>
          <h1>Open the Neighborhood!</h1>
        </div>
        
        <div className="landing">

          <ActionIcons ref="actions"/>

          <div className="big-search unresolved" ref="bigSearch">
            <img className="search-icon" src="images/search-white.svg"/>
            <input className="big-search__input" type="text" placeholder="Discover savings in your neighborhood..." onKeyPress={this.keypress}/>
          </div>

          <div className="main">

            <div className="local-block">

              

              <div className="container">

                <h2>Found 6 Coffee Coupons near Tampa, FL</h2>
                <div className="row">
                  <CouponCard 
                    image="http://d261sv3xac0f7i.cloudfront.net/custom/visa/peets/img/bg_v2.jpg"
                    logo="images/peetslogo.png"
                    merchant="Peet's Coffee & Tea"
                    title="$5.00 Amazon Gift Card"
                    description="Just spend at least $2.00 with your registered VISA credit card at Peet's Coffee & Tea."
                  />

                  <CouponCard 
                    image="images/coffeepour.png"
                    logo="images/starbuckslogo.png"
                    merchant="Starbucks Coffee"
                    title="10% off Your First Order"
                    description="Get a 10% discount on your first order. Limited time offer, restrictions apply. Orders over $75, ship free."
                  />

                  <CouponCard 
                    image="images/donuts.png"
                    logo="http://cdn.savings.com/logo/766094.pn"
                    merchant="Dunkin' Donuts"
                    title="Free Breakfast Sandwich"
                    description="With the purchase of any breakfast combo. Limited time offer, hurry in!"
                  />

                  <CouponCard 
                    image="http://d261sv3xac0f7i.cloudfront.net/custom/visa/peets/img/bg_v2.jpg"
                    logo="images/peetslogo.png"
                    merchant="Peet's Coffee & Tea"
                    title="$5.00 Amazon Gift Card"
                    description="Just spend at least $2.00 with your registered VISA credit card at Peet's Coffee & Tea."
                  />

                  <CouponCard 
                    image="images/coffeepour.png"
                    logo="images/starbuckslogo.png"
                    merchant="Starbucks Coffee"
                    title="10% off Your First Order"
                    description="Get a 10% discount on your first order. Limited time offer, restrictions apply. Orders over $75, ship free."
                  />

                  <CouponCard 
                    image="images/donuts.png"
                    logo="http://cdn.savings.com/logo/766094.pn"
                    merchant="Dunkin' Donuts"
                    title="Free Breakfast Sandwich"
                    description="With the purchase of any breakfast combo. Limited time offer, hurry in!"
                  />

                 
                </div> {/* .row */}

              </div> {/* .container */}
            </div> {/* .local-block */}

            <div className="promo-banner">
              <img ref="promoBanner" src="https://s3.amazonaws.com/vpdms-media-us/user-media/C4_Bridal_ThemePageHeader.jpg"/>
            </div>

          </div> {/* .main */}
          <RouteHandler/>
        </div>
      </div>
    ); 
  },

  vscrolling(e) {
    var top = e.target.scrollTop;
    this.refs.branding.getDOMNode().style.transform = `translate3d(0, ${top * 0.6}px, 0) scale(${1 - (top*0.00019)})`;
    this.refs.bigSearch.getDOMNode().style.transform = `translate3d(-50%, ${top * 0.5}px, 0)`;
    // this.refs.bigSearch.getDOMNode().style.opacity = 1 - (top*0.003);

    this.refs.actions.getDOMNode().style.opacity = 1 - (top*0.01);
    this.refs.fsvid.getDOMNode().style.transform = `translate3d(0, ${top * 0.7}px, 0)`;

    let hbar = this.refs.headerBar.getDOMNode();
    let vheight = window.innerHeight - 60;
    if (top >= vheight && !hbar.classList.contains('in')) {
      hbar.classList.add('in')
    } else if (top < vheight && hbar.classList.contains('in')) {
      hbar.classList.remove('in')
    }
  },

  keypress(e) {
    if (e.key === 'Enter') {
      scrollTo(window.innerHeight, () => {}, 500);
    }
  },

  touchstart(e) {
    console.dir(arguments)
    this.touchstartX = e.touches[0].pageX;
    this.touchstartT = Date.now();
  },

  touchmove(e) {
    this.lastTouchX = e.touches[0].pageX;
    this.lastTouchY = e.touches[0].pageY;
  },

  touchend(e) {
    var touchendT = Date.now();
    var dX = Math.abs(this.touchstartX - this.lastTouchX);
    var dT = Math.abs(this.touchstartT - touchendT);

    console.log(dX, dT);
  }

});

module.exports = App;



// 'http://s3.amazonaws.com/vpdms-media-us/user-media/stock-footage-customers-browsing-and-shopping-in-local-gift-store-purchasing-products-and-goods-from-shop.mp4',
// 'http://s3.amazonaws.com/vpdms-media-us/user-media/stock-footage-mother-giving-daughter-piggyback-as-they-spin-around-in-the-garden-in-slow-motion.mp4',
// 'http://s3.amazonaws.com/vpdms-media-us/user-media/stock-footage-two-brothers-hug-and-smile-while-on-a-suburban-sidewalk.mp4',
// 'http://s3.amazonaws.com/vpdms-media-us/user-media/stock-footage-young-boy-in-front-of-lemonade-stand.mp4'
// <div className="edge-container" ref="scrollview" onTouchStart={this.touchstart} onTouchMove={this.touchmove} onTouchEnd={this.touchend}>


// easing functions http://goo.gl/5HLl8
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
  if (t < 1) {
    return c/2*t*t + b
  }
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};
 
Math.easeInCubic = function(t, b, c, d) {
  var tc = (t/=d)*t*t;
  return b+c*(tc);
};
 
Math.inOutQuintic = function(t, b, c, d) {
  var ts = (t/=d)*t,
  tc = ts*t;
  return b+c*(6*tc*ts + -15*ts*ts + 10*tc);
};
 
// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
var requestAnimFrame = (function(){
  return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
})();
 
function scrollTo(to, callback, duration) {
  // because it's so fucking difficult to detect the scrolling element, just move them all
  function move(amount) {
    // document.documentElement.scrollTop = amount;
    // document.body.parentNode.scrollTop = amount;
    // document.body.scrollTop = amount;
    document.querySelector('.page').scrollTop = amount;
  }
  function position() {
    return document.documentElement.scrollTop || document.body.parentNode.scrollTop || document.body.scrollTop;
  }
  var start = position(),
    change = to - start,
    currentTime = 0,
    increment = 20;
  duration = (typeof(duration) === 'undefined') ? 500 : duration;
  var animateScroll = function() {
    // increment the time
    currentTime += increment;
    // find the value with the quadratic in-out easing function
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    // move the document.body
    move(val);
    // do the animation unless its over
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof(callback) === 'function') {
        // the animation is done so lets callback
        callback();
      }
    }
  };
  animateScroll();
}
