var React = require('react');
var Util = require('../util/util_functions.js');

var Export = React.createClass({
  getInitialState: function () {
    return {importText: ''};
  },

  setImportText: function (event) {
    this.setState({importText: event.target.value});
  },

  importData: function () {
    try {
      var data = JSON.parse(this.state.importText);
      for (var property in data) {
        if (data.hasOwnProperty(property)) {
          localStorage[property] = data[property];
        }
      }
      this.props.history.push('/summary');
    }
    catch(e) {
      alert('Import failed!');
    }
  },

  render: function () {
    return <div className='import-export'>
      <textarea
        className='import-export-text'
        value={this.state.importText}
        onChange={this.setImportText}
        placeholder='Paste import text here.' />
      <button onClick={this.importData}>Import</button>
    </div>;
  }
});

module.exports = Export;
