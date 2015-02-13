var React = require('react');
var CouponStore = require('./CouponStore');
var Card = require('./Card.react'); 

var CouponApp = React.createClass({ 

  getInitialState: function(){
    return _getState();
  },

  componentDidMount: function(){
    // Trigger a callback to re-set the state
    // when the store emits a `change` event.
    CouponStore.on('change', function(){
      console.info('CouponStore got new data, updating state');
      this.setState(_getState());
    }.bind(this))
  }, 

  render: function() {  
    console.info('Rendering CouponApp with state ->', this.state);

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

function _getState () {
  return {
    coupons: CouponStore.getAll()
  }
}

module.exports = CouponApp;