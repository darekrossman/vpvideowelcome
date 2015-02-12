var React = require('react');
var CouponApp = require('./CouponApp.react');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <CouponApp />
      </div>
    );
  }

});

module.exports = App;