// var palindrome = document.getElementById('result').innerHTML;
// console.log(palindrome);
 
// var givenString = prompt('Is it a palindrome?');
// console.log(givenString);


// function reverseString(str) {
//     var splitString = str.split("");

//     var reverseArray = splitString.reverse();

//     var joinArray = reverseArray.join("");

//     return joinArray;
// }

// var reversedString = reverseString(givenString);
// document.getElementById('palindrome').innerHTML = reversedString;


// if (givenString === reversedString) {
//     document.getElementById('palindrome').innerHTML = reversedString + " is a palindrome";
    
// } else {
//     document.getElementById('palindrome').innerHTML = givenString + " is not a palindrome";
// }


var x = parseInt(prompt ('Enter a number'));
console.log(x);



if (Number.isInteger(x / 2)) {
    document.getElementById('evenNumber').innerHTML = x + " is an even number";
} else {
    document.getElementById('evenNumber').innerHTML = x + " is not an even number";
}