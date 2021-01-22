//Program For Power of a number

const powerOfNumber = (a, b) => {
  if (b === 0) return 1;
  let power = a;
  power = power * powerOfNumber(a, b - 1);
  return power;
};

//Check Output
var result = powerOfNumber(5, 3);
console.log(result);
var result = powerOfNumber(1, 10);
console.log(result);
