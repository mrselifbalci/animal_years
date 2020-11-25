// Here’s how you convert your age from “human years” to “dog years”:
//The first two years of a dog’s life count as 10.5 human years each.
//Each year following equates to 4 human years.

let myName = prompt("What is your name?").toLowerCase();
let myAge = prompt("How old are you?");
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = (myAge - 2) * 4;
let myAgeInDogYears = earlyYears + laterYears;

alert(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);

// Here’s new convertion from “tortoise years” to “human years”:
// The first year of a tortoise’s life count as 12 human years.
// Each year following equates to 10 human years.

let tortoiseAge = prompt("How old is your tortoise");
let firstYearOfTortoiseInHumanYears = 12;
let tortoiseLaterYears = tortoiseAge - 1;
tortoiseLaterYears *= 10;
let tortoiseAgeInHumanYears =
  firstYearOfTortoiseInHumanYears + tortoiseLaterYears;

alert(
  `Your ${tortoiseAge} years old tortorise would have ${tortoiseAgeInHumanYears} years if it was a human.`
);
