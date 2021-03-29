const CustomError = require("../extensions/custom-error");

module.exports = function Hanoi(disksN, turnsS) {
  
  let turnPerSecond = turnsS / 3600;
  let turns = (2 ** disksN) - 1;
  let seconds = Math.floor(turns / turnPerSecond);



   return {turns, seconds};
};