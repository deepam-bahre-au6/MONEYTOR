//Program For remove duplicate elements from array

var GetUniqueArrElement = (num) => {
  var BlankArr = [];

  // loop through array
  for (var i of num) {
    if (BlankArr.indexOf(i) === -1) {
      BlankArr.push(i);
    }
  }
  console.log(BlankArr);
};

var array = [1, 2, 3, 4, 4, 2, 1, 5, 1, 4, 5];
var result = GetUniqueArrElement(array);
console.log(result);
