/*let word = prompt("skriv et ord");
let palindrome = function (word) {
  let len = word.length;
  let start = word.substring(0, math.floor(len / 2)).toLoverCase();
  let end = word.substring(len - math.floor(len / 2)).toLoverCase();
  console.log(palindrome);
  let flip = end.split("").reverse().join("");
  return start === flip;
}; - Ovenstående er et tidligere forsøg -*/
var input = prompt('Write a word');    

var Palindrome = str => {
    var strLen = str.length;
		
    if (strLen < 2) return true;

    if (str[0] === str[strLen - 1]) {
        return Palindrome( str.slice(1, strLen - 1) );
    }

    return false;
};

document.write(Palindrome(input));