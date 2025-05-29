/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCamel = (word) => {
  let result = word
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  return result.charAt(0).toLowerCase() + result.slice(1);
};
const makePascal = (word) => {
  return word
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
};
const makeSnake = (word) => {
  return word.split(" ").join("_");
};
const makeKebab = (word) => {
  return word.split(" ").join("-");
};
const makeTitle = (word) => {
  return word
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
const makeVowel = (word) => {
  return word
    .split("")
    .map((char) =>
      "aeiou".includes(char) ? char.toUpperCase() : char.toLowerCase()
    )
    .join("");
};
const makeConsonant = (word) => {
  return word
    .split("")
    .map((char) =>
      "bcdfghjklmnpqrstvwxyz".includes(char)
        ? char.toUpperCase()
        : char.toLowerCase()
    )
    .join("");
};

const makeCaze = function (input, caze) {
  let finalCaze = caze;

  if (Array.isArray(caze)) {
    if (caze[0] === "upper") input = input.toUpperCase();
    else input = input.toLowerCase();

    finalCaze = caze[1];
  }

  switch (finalCaze) {
    case "camel":
      return makeCamel(input);
    case "pascal":
      return makePascal(input);
    case "snake":
      return makeSnake(input);
    case "kebab":
      return makeKebab(input);
    case "title":
      return makeTitle(input);
    case "vowel":
      return makeVowel(input);
    case "consonant":
      return makeConsonant(input);
  }
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
