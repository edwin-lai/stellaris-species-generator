var React = require('react');
var PropTypes = React.PropTypes;

var Ethos = React.createClass({
  getInitialState: function () {
    return ({
      ethicsPoints: 3
    });
  },


  render: function() {
    return (
      <section className="ethos-wrapper">
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
        <h3 className="ethos-points">Ethic Points Left: {this.state.ethicsPoints}</h3>
        <button className="reset-ethos">Cancel</button>
      </section>
    );
  }

});

module.exports = Ethos;
