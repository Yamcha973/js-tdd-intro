function capitalizeFirstLetters(letter) {
    if (letter.length > 0) {
      let Array = letter.split(' ')
      let newArray = Array.map(word => {
        return word[0].toUpperCase() + word.slice(1)
      })
      return newArray.join(' ')
    } else {
      return '';
    }
  }
  
  module.exports = capitalizeFirstLetters;