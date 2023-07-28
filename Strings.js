// built-in length property
"Istanbul".length; // 8

// .slice()
"Istanbul".slice(2, 5); // tan

// .substring()
"Istanbul".substring(2, 5); // tan

// Difference between .slice() and .substring() is that start and end values less than 0 are treated as 0 in substring()

// .replace()
"Ankara".replace("a", "x"); // Ankxra
// /i flag (insensitive)
"Ankara".replace(/a/i, "x"); // xnkara
// /g flag (global match)
"Ankara".replace(/a/g, "x"); // Ankxrx

// .replaceAll()
"Ankara".replaceAll("a", "x"); // Ankxrx

// .toUpperCase()
"Turkey".toUpperCase(); // TURKEY

// .toLowerCase()
"Turkey".toLowerCase(); // turkey

// .concat()
"ABC".concat("xyz"); // ABCxyz
"ABC".concat("xyz", "123"); // ABCxyz123

// .trim()
"     Hi     ".trim(); //Hi//

// .trimStart()
"     Hi     ".trimStart(); //Hi     //

// .trimEnd()
"     Hi     ".trimEnd(); //     Hi//

// .padStart()
"2001".padStart(8, 0); // 00002001

// .padEnd()
"2001".padEnd(8, 0); // 20010000

// .charAt()
"Ankara".charAt(2); // k

// .charCodeAt()
"Ankara".charCodeAt(2); // 107 - k ASCII

// .split()
"Ankara Istanbul".split(); // [ 'Ankara', 'Istanbul' ]

// .indexOf()
"Ankara".indexOf("k"); // 2
"Ankara".indexOf("a", 3); // 3

// .search
"Ankara".search("k"); // 2

/*
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/

// .lastIndexOf
"Ankara".lastIndexOf("a"); // 5

// .startsWith()
"Ankara".startsWith("A"); // true

// .endsWith()
"Ankara".endsWith("a"); // true

// .includes()
"Ankara".includes("r"); // true
"Ankara".includes("x"); // false

// .match()
"Ankara".match("a");
// [ 'a', index: 3, input: 'Ankara', groups: undefined ]

// .matchAll()
"Ankara".matchAll("a"); // Object [RegExp String Iterator] {}

// Template Literals / string interpolation
let firstName = "Zeynep";
let lastName = "Akkaya";
`I am ${firstName} ${lastName}!`;
// I am Zeynep Akkaya

// backslash escape character \

("It's alright.");

/*
\b Backspace
\f Form Feed
\n New Line
\r Carriage Return
\t Horizontal Tabulator
\v Vertical Tabulator
*/

"Hey! ".repeat(3); // Hey! Hey! Hey!
