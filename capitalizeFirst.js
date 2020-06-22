const assert = require('assert');
const capitalizeFirstLetters = require('./capitalizeFirstLetters');

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirst(input) {
    return input.length > 0
    ? input[0].toUpperCase() + input.slice(1)
    : '';
  }
  
module.exports = capitalizeFirst;