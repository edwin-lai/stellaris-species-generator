var React = require('react'),
    FTLMethod = require('./ftl_method');

var FTLBox = React.createClass({
  getFTLMethods: function () {
    MethodStore.all().forEach(function (method, i) {
      return (
        <Weapon
          key={i}
          name={method.name}
          description={method.description}
          recommendation={method.recommendation}
          imageUrl={method.imageUrl}/>
      );
    });
  },
  render: function () {
    return (
      <div className="ftl-box">
        {this.getFTLMethods()}
      </div>
    );
  }
});

module.exports = WeaponBox;
