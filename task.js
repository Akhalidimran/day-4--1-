//Arrow functions.
//1.Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers);

//2.Convert all the strings to title caps in a string array.

const strings = ['hello world', 'I am a class'];
const toTitleCase = (str) => {
  const words = str.split(' ');
  return words.map((word) => word[0].toUpperCase() + word.slice(1));
};
const titleCasedStrings = strings.map(toTitleCase);
console.log(titleCasedStrings);

//3.Sum of all numbers in an array

const sum = (arr) => {
    let total = 0;
    for (const number of arr) {
      total += number;
    }
    return total;
  };
  const numbers = [1, 2, 3, 4, 5];
  console.log(sum(numbers));

//4.Return all the prime numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbers.filter((number) => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
});
console.log(primeNumbers);

//5.Return all the palindromes in an array

const getAllPalindromes = (words) => {
    return words.filter((word) => {
      return word.split("").reverse().join("") === word;
    });
  };
  console.log(getAllPalindromes(["hello", "noon"]));