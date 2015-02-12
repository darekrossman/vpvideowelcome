var React = require('react');
var CouponStore = require('./CouponStore');
var Card = require('./Card.react'); 

var CouponApp = React.createClass({ 

  getInitialState: function(){
    // return {
    //   coupons: []
    // }

    return _getState();
  },

  componentDidMount: function(){
    // _fakeAsyncRequest().then(function(coupons){
    //   this.setState({
    //     coupons: coupons
    //   })
    // }.bind(this))

    CouponStore.on('change', function(){
      this.setState(_getState);
    })
  }, 

  render: function() { 

    // var coupons = this.state.coupons;
    
    var coupons = Object.keys(this.state.coupons).map(key => {
      return this.state.coupons[key];
    });

    // Create an array of <Card/> components from coupons in state,
    // passing the relevant data to each one as an attribute.
    var cards = coupons.map(coupon => {
      return (
        <Card 
          key={coupon.id} 
          src={coupon.featureImage} 
          title={coupon.merchantName} 
          description={coupon.title}
        />
      );
    });

    // here's our JSX
    return (
      <div className="container">
        <div className="row">
          {cards}
        </div>
      </div>
    );
  }

});

function _fakeAsyncRequest () {
  return Promise.resolve([
    {
      id: 1,
      merchantName: 'TacoBus',
      title: 'Free Large Soda with Purchase of Taco',
      category: 'Restaurants',
      isFavorite: false,
      featureImage: 'public/img/tacos.jpg',
      distance: '.2 mi'
    },{
      id: 2,
      merchantName: 'JiffyLube',
      title: '20% Off Oil Change and Alignment',
      category: 'Automotive',
      isFavorite: false,
      featureImage: 'public/img/oilchange.jpg',
      distance: '1.1 mi'
    },{
      id: 3,
      merchantName: 'AMC',
      title: 'Half-Off Movie Night on Wednesday',
      category: 'Entertainment',
      isFavorite: false,
      featureImage: 'public/img/movienight.jpg',
      distance: '2 mi'
    }
  ]);
}

function _getState () {
  return {
    coupons: CouponStore.getAll()
  }
}

module.exports = CouponApp;