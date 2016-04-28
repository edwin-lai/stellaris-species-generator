var React = require('react'),
    FTLMethod = require('./ftl_method');

var FTLBox = React.createClass({
  getFTLMethods: function () {
    var methods = MethodStore.all().map(function (method, i) {
      return (
        <FTLMethod
          key={i}
          name={method.name}
          description={method.description}
          recommendation={method.recommendation}
          imageUrl={method.imageUrl}/>
      );
    });

    return methods;
  },
  render: function () {
    return (
      <div className="ftl-box">
        {this.getFTLMethods()}
      </div>
    );
  }
});

module.exports = FTLBox;
