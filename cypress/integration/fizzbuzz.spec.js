// Write a program that prints the numbers from 1 to 100.
// For multiples of three print "Fizz" instead of the number
// For the multiples of five print "Buzz".
// For numbers which are multiples of both three and five print "FizzBuzz".

function fizzbuzz(value) {
  const multipleOfThree = value % 3 === 0;
  const multipleOfFive = value % 5 === 0;

  if (multipleOfThree && multipleOfFive) return "FizzBuzz";
  else if (multipleOfThree) return "Fizz";
  else if (multipleOfFive) return "Buzz";
    else return value.toString();
}

describe('Fizzbuzz', function () {
  it('should return a string from any given value', function () {
    expect(fizzbuzz(1)).to.equal('1');
  });
})

describe('Fizzbuzz', function () {
  it('For multiples of three print "Fizz" instead of the value', function () {
    expect(fizzbuzz(3)).to.equal('Fizz');
    expect(fizzbuzz(6)).to.equal('Fizz');
    expect(fizzbuzz(18)).to.equal('Fizz');
  });
})

describe('Fizzbuzz', function () {
  it('For multiples of five print "Buzz" instead of the value', function () {
    expect(fizzbuzz(5)).to.equal('Buzz');
    expect(fizzbuzz(10)).to.equal('Buzz');
    expect(fizzbuzz(20)).to.equal('Buzz');
  });
})

describe('Fizzbuzz', function () {
  it('For multiples of three and five print "FizzBuzz" instead of the value', function () {
    expect(fizzbuzz(15)).to.equal('FizzBuzz');
    expect(fizzbuzz(30)).to.equal('FizzBuzz');
    expect(fizzbuzz(45)).to.equal('FizzBuzz');
  });
})