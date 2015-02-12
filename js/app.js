var React = require('react');
var App = require('./App.react');

if (window) {
  window.React = React; // export for http://fb.me/react-devtools  
}

React.render(<App />, document.getElementById('app'))


