module.exports = function repeater(str, {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'}) {
  let madeStr = String(str);
  let madeAdditionStr = String(addition);
let arrayq = [];
for(let i = 0; i<repeatTimes; i++){
   arrayq.push(madeStr);
if(madeAdditionStr !=''){
 for(let n=0; n<additionRepeatTimes; n++){
   arrayq.push(madeAdditionStr)
   if(n < additionRepeatTimes-1){
        arrayq.push(additionSeparator)
    }
    }
}
if(i<repeatTimes-1){
arrayq.push(separator)
}
}
return arrayq.join('');
};