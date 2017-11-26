// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
//The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//A simple brute-force approach to this is simply to iterate through all of the numbers from 1 to 999 (since we are only to check numbers below 1000), check if the number is divisible by 3 or 5, and sum the ones which are.

const findMultiples = (val1, val2, limit) => {
  var result = 0;

  for (var i = 1; i < limit; i++) {
    if (i % val1 === 0 || i % val2 === 0) {
      result += i;
    }
  }
  return result;
};

function testMultiples() {
  var test1 = findMultiples(3, 5, 1000) === 233168;
  var test2 = findMultiples(3, 5, 10) === 23;
  if (test1) {
    console.log('multiples of 3 and 5 limit 1000 is correct, 233168');
  } else {
    console.log('multiples of 3 and 5 limit 1000 is incorrect', test2);
  }

  if (test2) {
    console.log('multiples of 3 and 5 limit 10 is correct, 23');
  } else {
    console.log('multiples of 3 and 5 limit 10 is incorrect', test2);
  }
}

findMultiples(3, 5, 1000);
testMultiples();
