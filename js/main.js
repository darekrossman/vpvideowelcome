import React  from 'react';
import Router from 'react-router';
import App    from './App.react';

// Utilities & Helpers
import tapEventPlugin from 'react-tap-event-plugin';

React.initializeTouchEvents(true);

// Adds onTouchTap
// https://github.com/zilverline/react-tap-event-plugin
tapEventPlugin();

let Route = Router.Route; 

var routes = (
  <Route name="app" path="/" handler={App}>
        
  </Route>
); 

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app'));
}); 



 

