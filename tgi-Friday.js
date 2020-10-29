//return the number of times a month ends with a Friday.
log = console.log
var lastday = function(y, m) {
  return new Date(y, m + 1, 0).getDate();
}
console.log(lastday(2020, 10));
// console.log(lastday(2014, 1));
// console.log(lastday(2014, 11));
