let str = "Hello World!",
  num = 99;

console.log(str + ": " + typeof str + ", " + str.length + " Characters");

console.log(num);
console.log("Its type: " + typeof num);

let numToStr = num.toString();
// let numToStr = String(num);

console.log(numToStr);
console.log(
  "Its type: " + typeof numToStr + ", " + numToStr.length + " Characters"
);

console.log("*****String Methods*****");

let phrase = "I love HTML, CSS and JavaScript",
  // word = phrase.indexOf( "love" );
  // word = phrase.lastIndexOf( "love", 5 );
  word = phrase.search(/html/i); // i >> Make all expression Insensitive

console.log(word);

console.log(phrase);
console.log("Its type: " + typeof phrase);

let splitted = phrase.split(" ", 3);
console.log(splitted);
console.log("Its type: " + typeof splitted);

let sliced = phrase.slice(13, 16);
console.log(sliced);
console.log("Its type: " + typeof sliced);

let substring = phrase.substring(16, 13);
console.log(substring);
console.log("Its type: " + typeof substring);

console.log(
  `Character (${phrase.charAt(7)}), its code is: ${phrase.charCodeAt(7)}`
);

console.log("After replacing: " + phrase.replace(/javascript/i, "JS"));

// let myName = String.fromCharCode(83, 79, 78, 68, 79, 83);

// console.log("FromCharCode: ", myName); //SONDOS
// console.log("Lowered Case: ", myName.toLowerCase());

// Chain Methods
let myName = String.fromCharCode(83, 79, 78, 68, 79, 83)
  .toLowerCase()
  .replace("s", "S");
console.log(myName);

console.log("     Sondos    Sami     ".trim());
