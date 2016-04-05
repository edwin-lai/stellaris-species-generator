var React = require('react');
var PropTypes = React.PropTypes;
var EthosInfo = require('./ethos_info');

var Ethos = React.createClass({
  getInitialState: function () {
    return ({
      ethicsPoints: 3
    });
  },

  onHover: function (e) {
    console.log(e.target.id);
    var pos = [e.pageX, e.pageY];
    console.log(pos);
  },


  render: function() {
    return (
      <section className="ethos-wrapper">
        <section className="ethos-holder">
          <div onMouseOver={this.onHover} className="ethos fanatic-militarist" id="fanatic-militarist" />
          <div onMouseOver={this.onHover} className="ethos militarist" id="militarist" />
          <div onMouseOver={this.onHover} className="ethos fanatic-spiritualist" id="fanatic-spiritualist" />
          <div onMouseOver={this.onHover} className="ethos spiritualist" id="spiritualist" />
          <div onMouseOver={this.onHover} className="ethos fanatic-xenophobe" id="fanatic-xenophobe" />
          <div onMouseOver={this.onHover} className="ethos xenophobe" id="xenophobe" />
          <div onMouseOver={this.onHover} className="ethos fanatic-collectivist" id="fanatic-collectivist" />
          <div onMouseOver={this.onHover} className="ethos collectivist" id="collectivist" />
          <div onMouseOver={this.onHover} className="ethos fanatic-individualist" id="fanatic-individualist" />
          <div onMouseOver={this.onHover} className="ethos individualist" id="individualist" />
          <div onMouseOver={this.onHover} className="ethos fanatic-xenophile" id="fanatic-xenophile" />
          <div onMouseOver={this.onHover} className="ethos xenophile" id="xenophile" />
          <div onMouseOver={this.onHover} className="ethos fanatic-materialist" id="fanatic-materialist" />
          <div onMouseOver={this.onHover} className="ethos materialist" id="materialist" />
          <div onMouseOver={this.onHover} className="ethos fanatic-pacifist" id="fanatic-pacifist" />
          <div onMouseOver={this.onHover} className="ethos pacifist" id="pacifist" />
        </section>
        <h3 className="ethos-points">Ethic Points Left: {this.state.ethicsPoints}</h3>
        <button className="reset-ethos">Cancel</button>
      </section>
    );
  }

});

module.exports = Ethos;
