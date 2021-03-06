var React = require('react');
var EthosStore = require('../../stores/ethos.js');
var GovStore = require('../../stores/government.js');
var GovIconURLs = require('../../constants/government/government/government_icon_urls.js');
var EthosIconURLs = require('../../constants/government/ethos/ethos_icon_urls.js');
var textCleaner = require('../../util/util_functions.js').textCleaner;

var Government = React.createClass({
  render: function () {
    var gov = GovStore.currentGovernment();
    return <div className='summary-gov'>
      <img src={GovIconURLs[gov]} className='summary-gov-icon'/>
      <li>
        <ul className='summary-gov-name'>{textCleaner(gov)}</ul>
        {EthosStore.all().map(function (ethos) {
          return <ul key={ethos} className='summary-ethos'>
            <img src={EthosIconURLs[ethos]} className='summary-ethos-icon'/>
            {textCleaner(ethos)}
          </ul>;
        })}
      </li>

    </div>;
  }
});

module.exports = Government;
