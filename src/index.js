module.exports = function getZerosCount(number) {
  let count = 0;
  for(let i = 5; i < number; i*=5){
    count+=Math.floor(number / i);
  }
  return count;
}