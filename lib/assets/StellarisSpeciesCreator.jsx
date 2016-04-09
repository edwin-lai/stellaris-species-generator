// TODO!!
var React = require('react'),
    ReactDOM = require('react-dom');
    // ReactRouter = require('react-router'),
    // Route = ReactRouter.Route,
    // IndexRoute = ReactRouter.IndexRoute,
    // Router = ReactRouter.Router,
    // Redirect = ReactRouter.Redirect;
    // History = require('history');

var React = require('react');
var ReactDOM = require('react-dom');
var Government = require('./components/government');
var Planet = require('./components/planets/planets');

// var routes = (
//   <Router history={History.HashHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={LandingPage} />
//       <Route path='governments' component={Government} />
//       <Route path="planets" component={Planet} />
//     </Route>
//   </Router>
// )

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Government />, document.getElementById('root'));
});
