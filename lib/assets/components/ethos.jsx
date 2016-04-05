var React = require('react');
var PropTypes = React.PropTypes;

var Ethos = React.createClass({

  render: function() {
    return (
      <div className="ethos-holder">
        <div className="ethos fanatic-militarist" />
        <div className="ethos militarist" />
        <div className="ethos fanatic-spiritualist" />
        <div className="ethos spiritualist" />
        <div className="ethos fanatic-xenophobe" />
        <div className="ethos xenophobe" />
        <div className="ethos fanatic-collectivist" />
        <div className="ethos collectivist" />
        <div className="ethos fanatic-individualist" />
        <div className="ethos individualist" />
        <div className="ethos fanatic-xenophile" />
        <div className="ethos xenophile" />
        <div className="ethos fanatic-materialist" />
        <div className="ethos materialist" />
        <div className="ethos fanatic-pacifist" />
        <div className="ethos pacifist" />
      </div>
    );
  }

});

module.exports = Ethos;
