/* 
Do the below programs in anonymous function & IIFE
1.Print odd numbers in an array
2.Convert all the strings to title caps in a string array
3.Sum of all numbers in an array
4.Return all the prime numbers in an array
5.Return all the palindromes in an array
6.Return median of two sorted arrays of the same size.
7.Remove duplicates from an array
8.Rotate an array by k times
*/

//1.Print odd numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = numbers.filter((num) => num % 2 === 1);
console.log(odds);

//2.Convert all the strings to title caps in a string array
function toTitleCaps(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(toTitleCaps("welcome to guvi"));

//3.Sum of all numbers in an array
var arr = [4, 8, 7, 13, 12];
var sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("Sum is " + sum);

//4.Return all the prime numbers in an array
(function (numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
})([1, 2, 3, 4]);

//5.Return all the palindromes in an array
function isPalindrome(N) {
  let str = "" + N;
  let len = str.length;
  for (let i = 0; i < parseInt(len / 2, 10); i++) {
    if (str[i] != str[len - 1 - i]) return false;
  }
  return true;
}
console.log(isPalindrome("dad", "malayalam", "run"));

//6.Return median of two sorted arrays of the same size.

//7.Remove duplicates from an array
// (function(array , k){
// 	k = k % a.length;
// 	  if(k < 0){
// 		k += a.length;
// 	  }

// 	  reverse(a, 0, a.length - k - 1);
// 	  reverse(a, a.length - k, a.length - 1);
// 	  reverse(a, 0, a.length - 1);
// 	})([1,2,3,4] , 2)

//8.Rotate an array by k times
// let rotate = function(arr, numberOfShifts) {
//     let deletedArray = arr.splice(arr.length-numberOfShifts);
//     for (let i=0; i < deletedArray.length; i++){
//         arr.splice(i,0,deletedArray[i]);
//     }
    
//     return arr;
	
// };
// arr = ([2,3,4,5,6],2);
// rotate()


