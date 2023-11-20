// unário 
// let x = 1;

// x = -x;
// alert( x ); // -1, unário negação 

// binário
let x = 1, y = 3;
alert( y - x); // 2, binary minus subtracts values

// % restante

alert( 5 % 2); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4


// exponenciação **

alert( 2 ** 2); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2^4 = 16

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

// Concatenação de strings com binário
let s = "my" + "string";
alert(s); // mystring

alert("1" + 2 ); // "12"
alert( 2 + "1" ); // "21"

alert("1" + 2 + 2); // "122" and not "14"
alert(6 - "2"); // 4, converts "2" to a number
alert("6" / "2"); // 3, converts both operands to numbers

// Conversão numérica, unário +

// no effect on numbers
let z = 1;
alert ( + z); // 1

let v = - 2;
alert( + v); // -2

// Converts non-numbers
alert( + true); // 1
alert(+ ""); // 0

// Convert unário
let apples = "2";
let oranges = "3";

alert( apples + oranges); // "23", the binary plus concatenates strings

// both values onverted to numbers before the binary plus
alert(+ apples + + oranges); // 5

// the longer variant
// alert( Number(apples) + Number(oranges)); // 5

// Atribuição

let k = 2 * 2 + 1; // vai multiplicar e atribuir o valor da soma
alert( k ); // 5

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0
