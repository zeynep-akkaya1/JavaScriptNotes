123e5; // 12300000 = 123 * 10^5
123e-5; // 0.00123 = 123 * 10^-5

BigInt("123456789012345678901234567890"); // too big

// The maximum number of decimals is 17
9999999999999999; // 10000000000000000

0.2 + 0.1; // 0.30000000000000004

isNaN(100 / "Apple"); // true

typeof NaN; // number

2 / 0; // Infinity
-2 / 0; // -Infinity

typeof Infinity; // number

0xff; // hexadecimal -> 255

(9.656).toExponential(); // 9.656e+0
(9.656).toExponential(2); // 9.66e+0
(9.656).toExponential(6); // 9.656000e+0

(9.656).toFixed(); // 10
(9.656).toFixed(2); // 9.66
(9.656).toFixed(6); // 9.656000

(9.656).toPrecision(); // 9.656
(9.656).toPrecision(2); // 9.7
(9.656).toPrecision(6); // 9.65600

Number(true); // 1
Number(false); // 0

Number("10"); // 10
Number("  10.33  "); // 10.33

Number("Hi"); // NaN

Number(new Date("1970-01-01")); // 0
Number(new Date("1970-01-02")); // 86400000

parseInt("-10.33"); // -10
parseInt("10 xyz"); // 10

parseFloat("10.33"); // 10.33

Number.isInteger(10); // true
Number.isInteger(10.5); // false

Number.isSafeInteger(9007199254740992); // false
// This is safe: 9007199254740991. This is not safe: 9007199254740992.

NaN == NaN; // false
NaN === NaN; // false

+0 == -0; // true
+0 === -0; // true
