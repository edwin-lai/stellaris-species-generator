var React = require('react');
var PropTypes = React.PropTypes;

var EthosSelector = React.createClass({

  render: function() {
    
    return (
      <section className="ethos-holder">
        <div onMouseOver={this.onHover} className="ethos fanatic-militarist" id="fanatic_militarist" />
        <div onMouseOver={this.onHover} className="ethos militarist" id="militarist" />
        <div onMouseOver={this.onHover} className="ethos fanatic-spiritualist" id="fanatic_spiritualist" />
        <div onMouseOver={this.onHover} className="ethos spiritualist" id="spiritualist" />
        <div onMouseOver={this.onHover} className="ethos fanatic-xenophobe" id="fanatic_xenophobe" />
        <div onMouseOver={this.onHover} className="ethos xenophobe" id="xenophobe" />
        <div onMouseOver={this.onHover} className="ethos fanatic-collectivist" id="fanatic_collectivist" />
        <div onMouseOver={this.onHover} className="ethos collectivist" id="collectivist" />
        <div onMouseOver={this.onHover} className="ethos fanatic-individualist" id="fanatic_individualist" />
        <div onMouseOver={this.onHover} className="ethos individualist" id="individualist" />
        <div onMouseOver={this.onHover} className="ethos fanatic-xenophile" id="fanatic_xenophile" />
        <div onMouseOver={this.onHover} className="ethos xenophile" id="xenophile" />
        <div onMouseOver={this.onHover} className="ethos fanatic-materialist" id="fanatic_materialist" />
        <div onMouseOver={this.onHover} className="ethos materialist" id="materialist" />
        <div onMouseOver={this.onHover} className="ethos fanatic-pacifist" id="fanatic_pacifist" />
        <div onMouseOver={this.onHover} className="ethos pacifist" id="pacifist" />
      </section>
    );
  }

});

module.exports = EthosSelector;
