uppercaseEnds = (str) => str.charAt(0).toUpperCase() + str.substr(1, str.length-2) + str.charAt(str.length-1).toUpperCase()
console.log(uppercaseEnds("javascript"))