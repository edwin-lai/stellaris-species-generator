var React = require('react');
var PropTypes = React.PropTypes;

var Ethos = React.createClass({

  render: function() {
    return (
      <div className="ethos-holder">
        <div className="ethos fanatic-militarist" id="fanatic-militarist" />
        <div className="ethos militarist" id="militarist" />
        <div className="ethos fanatic-spiritualist" id="fanatic-spiritualist" />
        <div className="ethos spiritualist" id="spiritualist" />
        <div className="ethos fanatic-xenophobe" id="fanatic-xenophobe" />
        <div className="ethos xenophobe" id="xenophobe" />
        <div className="ethos fanatic-collectivist" id="fanatic-collectivist" />
        <div className="ethos collectivist" id="collectivist" />
        <div className="ethos fanatic-individualist" id="fanatic-individualist" />
        <div className="ethos individualist" id="individualist" />
        <div className="ethos fanatic-xenophile" id="fanatic-xenophile" />
        <div className="ethos xenophile" id="xenophile" />
        <div className="ethos fanatic-materialist" id="fanatic-materialist" />
        <div className="ethos materialist" id="materialist" />
        <div className="ethos fanatic-pacifist" id="fanatic-pacifist" />
        <div className="ethos pacifist" id="pacifist" />
      </div>
    );
  }

});

module.exports = Ethos;
