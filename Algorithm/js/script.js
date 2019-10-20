// Algorithm 1
var palindrome = document.getElementById('palindrome').innerHTML;
console.log(palindrome);

var givenString = prompt('Is it a palindrome?');
console.log(givenString);


function reverseString(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    return joinArray;
}

var reversedString = reverseString(givenString);
document.getElementById('palindrome').innerHTML = reversedString;

if (givenString === reversedString) {
    document.getElementById('palindrome').innerHTML = reversedString + " is a palindrome";

} else {
    document.getElementById('palindrome').innerHTML = givenString + " is not a palindrome";
}

// Algorithm 2
var x = parseInt(prompt ('Enter a number'));
console.log(x);

if (Number.isInteger(x / 2)) {
    document.getElementById('evenNumber').innerHTML = x + " is an even number";
} else {
    document.getElementById('evenNumber').innerHTML = x + " is not an even number";
}

// Algorithm 3
var sentence = "The good news is that everyone makes mistakes. All of the mistakes you make, have been made by others who started off just like you.";
var replacedSentence = sentence.replace("mistakes", "bugs").replace("mistakes", "bugs");
document.getElementById('mistakes').innerHTML = replacedSentence;

// Algorithm 4
var items = ["Dachshund", "Labrador", "Pug"];
document.getElementById('items').innerHTML = items;

document.getElementById('add').addEventListener('click', function() {
  var item = document.getElementById('input').value;
  items.push(item);
  document.getElementById('input').value = '';
  document.getElementById('items').innerHTML = items;
});
document.getElementById('delete').addEventListener('click', function() {
  items.pop();
  document.getElementById('items').innerHTML = items;
});
document.getElementById('search').addEventListener('click', function() {
  var item = document.getElementById('input').value;
  var includes = items.includes(item);
  if (includes) {
    document.getElementById('message').innerHTML = "Array contains " + item;
  } else {
    document.getElementById('message').innerHTML = "Array does not contain " + item;
  }
});
document.getElementById('sort').addEventListener('click', function() {
  items.sort();
  items.reverse();
  document.getElementById('items').innerHTML = items;
});
