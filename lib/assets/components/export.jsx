var React = require('react');
var Util = require('../util/util_functions.js');

var Export = React.createClass({
  selectAll: function () {
    document.getElementById('export-text').focus();
    document.getElementById('export-text').select()
  },

  exportData: function () {
    if (Util.localStorageAvailable()) {
      return JSON.stringify(localStorage);
    } else {
      return 'ERROR: Local storage not available! Do not try to import this.';
    }
  },

  render: function () {
    return <div className='import-export'>
      <div>Copy the text below and paste it into an import box to transfer your species to your friends!</div>
      <hr />
      <textarea
        id='export-text'
        className='import-export-text'
        value={this.exportData()}
        onClick={this.selectAll}
        readOnly='readOnly'/>
    </div>;
  }
});

module.exports = Export;
