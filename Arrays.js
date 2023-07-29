// const cars = ["BMW", "Mercedes"];

const cars = [];
cars[0] = "Mercedes";
cars[1] = "BMW";

typeof cars; // object

cars.length; // 2

cars.sort(); // [ 'BMW', 'Mercedes' ]

Array.isArray(cars); // true

cars instanceof Array; // true

cars.toString(); // BMW,Mercedes

cars.push("Rolls Royce"); // [ 'BMW', 'Mercedes', 'Rolls Royce' ]

cars.pop(); // [ 'BMW', 'Mercedes' ]

cars.unshift("Rolls Royce"); // [ 'Rolls Royce', 'BMW', 'Mercedes' ]

cars.shift(); // [ 'BMW', 'Mercedes' ]

cars.join(" | "); // BMW | Mercedes

cars.pop();
cars.pop();

cars[0] = cars.concat(["Rolls Royce", "Maserati"], [["Audi"]]);
// [ [ 'Rolls Royce', 'Maserati', [ 'Audi' ] ] ]

cars[0] = cars.flat().flat();
// [ [ 'Rolls Royce', 'Maserati', 'Audi' ] ]

cars.splice(1, 0, "Cadillac", "Bentley");
// [ [ 'Rolls Royce', 'Maserati', 'Audi' ], 'Cadillac', 'Bentley' ]

/*
1 defines the position where new elements should be added.
0 defines how many elements should be removed.
*/

cars.slice(1); // [ 'Cadillac', 'Bentley' ]

cars.slice(1, 3); // [ 'Cadillac' ]

cars.reverse(); // [ 'Bentley', 'Cadillac', [ 'Rolls Royce', 'Maserati', 'Audi' ] ]

cars.forEach((item) => {
  console.log(item);
});
/*
Bentley
Cadillac
[ 'Rolls Royce', 'Maserati', 'Audi' ]
*/

cars.map((item) => {
  console.log(item);
});
/*
Bentley
Cadillac
[ 'Rolls Royce', 'Maserati', 'Audi' ]
*/

cars.indexOf("Cadillac"); // 1
cars.indexOf("X"); // -1

cars.includes("Cadillac"); // true

delete cars[0]; // [ <1 empty item>, 'Cadillac', [ 'Rolls Royce', 'Maserati', 'Audi' ] ]

[1, 2, 3, 4, 5, 6].flatMap((x) => x * 2); // [ 2, 4, 6, 8, 10, 12 ]

[1, 2, 3, 4, 5, 6].filter((x) => x % 2 == 0); // [ 2, 4, 6 ]

[1, 2, 3].reduce((total, value) => total + value); // 6

[1, 2, 3, 4, 5, 6].every((x) => x % 2 == 0); // false
[1, 2, 3, 4, 5, 6].every((x) => x > 0); // true

[1, 2, 3, 4, 5, 6].some((x) => x % 2 == 0); // true

[1, 2, 3, 4, 5, 6].find((x) => x % 2 == 0); // 2
[1, 2, 3, 4, 5, 6].findIndex((x) => x % 2 == 0); // 1

Array.from("ABCDEFG"); // A,B,C,D,E,F,G

const keys = ["Cadillac", "Bentley"].keys();
for (let x of keys) {
  console.log(x);
}
/*
0
1
*/
const entries = ["Cadillac", "Bentley"].entries();
for (let x of entries) {
  console.log(x);
}
/*
[ 0, 'Cadillac' ]
[ 1, 'Bentley' ]
*/

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];

[q1, q2]; // [ [ 'Jan', 'Feb', 'Mar' ], [ 'Apr', 'May', 'Jun' ] ]

const halfYear = [...q1, ...q2]; // [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ]

let [first, , third] = ["Jan", "Feb", "Mar"];
first; // Jan
third; // Mar
