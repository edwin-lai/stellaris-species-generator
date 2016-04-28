var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    Router = ReactRouter.Router,
    Redirect = ReactRouter.Redirect,
    hashHistory = require('react-router').hashHistory;

var Government = require('./components/government/government.jsx');
var Planets = require('./components/planets/planets.jsx');
var PlanetInfo = require('./components/planets/planet_info.jsx');
var PlanetSelector = require('./components/planets/planet_selector.jsx');
var Traits = require('./components/traits/traits.jsx');
var WeaponBox = require('./components/ship/weapon_box');
var FTLBox = require('./components/ship/ftl_box');
var App = require('./components/app.jsx');

var routes = (
  <Router>
    <Route path='/' component={App}>
      <Route path='governments' component={Government} />
      <Route path="planets" component={Planets} />
      <Route path='traits' component={Traits} />
      <Route path='weapons' component={WeaponBox} />
      <Route path='ftlMethods' component={FTLBox} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, document.getElementById('root'));
});
