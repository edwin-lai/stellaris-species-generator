var UtilFunctions = {

  /*
    This function will take a string with underscored variable names,
    replace the underscores with spaces and capitalize the beginning
    of each word.
  */

  textCleaner: function(str) {
    return str.replace(/_/g, " ").replace(/(\b[a-z](?!\s))/g,
          function(x) {return x.toUpperCase();});
  },

  localStorageAvailable: function () {
  	try {
  		var storage = window['localStorage'],
  			x = '__storage_test__';
  		storage.setItem(x, x);
  		storage.removeItem(x);
  		return true;
  	}
  	catch(e) {
  		return false;
  	}
  }
};

module.exports = UtilFunctions;
