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
};

module.exports = UtilFunctions;
