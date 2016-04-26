var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app.jsx');
var Map = require('./components/map.jsx');
var BusinessItemDetail = require('./components/business/item_detail');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;


  var routes = (
    <Route component={App} path="/">
      <IndexRoute component={Map} />
      <Route component={BusinessItemDetail} path="/businesses/:id" />
    </Route>
  );

  document.addEventListener('DOMContentLoaded', function(){
    var content = document.querySelector('#root');
    ReactDOM.render(<Router history={hashHistory}>{routes}</Router>, content);
  });
