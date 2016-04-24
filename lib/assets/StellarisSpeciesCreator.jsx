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
var Government = require('./components/government/government');
var Planets = require('./components/planets/planets');
var TraitsMenu = require('./components/traits/traits.jsx');
// var PlanetInfo = require('./components/planets/planet_info');
// var PlanetSelector = require('./components/planets/planet_selector');

// var routes = (
//   <Router history={History.HashHistory}>
//     <Route path='/' component={App}>
//       <IndexRoute component={LandingPage} />
//       <Route path='governments' component={Government} />
//       <Route path="planets" component={Planet} />
//     </Route>
//   </Router>
// )
window.TraitStore = require('./stores/trait.js');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TraitsMenu />, document.getElementById('root'));
});
