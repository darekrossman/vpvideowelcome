var React     = window.React = require('react');
var Router    = require('react-router');
var App       = require('./App.react');
var Route     = Router.Route;
 
var routes = (
  <Route name="app" path="/" handler={App}>
    
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
}); 


 

