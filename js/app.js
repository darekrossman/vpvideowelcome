var React     = require('react');
var Router    = require('react-router');
var App       = require('./App.react');
var CouponApp = require('./CouponApp.react');
var Route     = Router.Route;
 
var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="coupon-app" handler={CouponApp}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
}); 

window.React = React; // <-- needed for dev tools
 

