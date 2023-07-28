Math.PI; // 3.141592653589793

/*
Math object has no constructor.
Math object is static.
*/

Math.E; // Euler's number -> 2.718281828459045
Math.SQRT2; // square root of 2 -> 1.4142135623730951
Math.SQRT1_2; // square root of 1/2 -> 0.7071067811865476
Math.LN2; // natural logarithm of 2 -> 0.6931471805599453
Math.LN10; // natural logarithm of 10 -> 2.302585092994046
Math.LOG2E; // base 2 logarithm of E -> 1.4426950408889634
Math.LOG10E; // base 10 logarithm of E -> 0.4342944819032518

Math.round(4.5); // 5

Math.ceil(4.1); // 5
Math.floor(4.9); // 4

Math.trunc(4.5995); // 4 -> integer part

Math.sign(-4); // -1
Math.sign(0); // 0
Math.sign(4); // 1

Math.pow(8, 2); // 64
Math.sqrt(64); // 8

Math.abs(-4.6); // 4.6

/*
Angle in radians = Angle in degrees x PI / 180.
Math.sin(x) and Math.cos(x) returns a value between -1 and 1 of the angle x (given in radians).
*/
Math.sin((90 * Math.PI) / 180); // 1
Math.cos((0 * Math.PI) / 180); // 1

Math.min(0, 150, -200); // -200
Math.max(0, 150, -200); // 150

// Math.log(x) returns the natural logarithm of x.
Math.log(1); // 0
Math.log(2); // 0.6931471805599453
Math.log(10); // 2.302585092994046

Math.log2(8); // 3
Math.log10(1000); // 3

// The Math.exp() method returns the value of Ex
Math.exp(1); // 2.718281828459045

// ******************** RANDOM ********************

// between 0 (inclusive), and 1 (exclusive)
Math.random(); // 0.5278187224993618

// Returns a random integer from 0 to 9:
Math.floor(Math.random() * 10); // 4

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomInteger(5, 15); // 8
