/******************
 * YOUR CODE HERE *
 ******************/
function xify(str) {
let newStr = "";
for (const letter of str){
  const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
if (newStr === letter) {
  newStr =  + "x"
}  
return newStr
}  
  //return newStr

  }

  function yellingChars(str) {
    let outputStr = '';
  for (const char of str) {
    if (char === '') {
      outputStr = outputStr + '!';}
    // } else {
    //   outputStr = outputStr + char;
    // }
  }
  return outputStr;
}

function numberedChars(str) {

}

function exclaim(str){
  let outputStr = '';
  for (const char of str) {
    const toReplace = '.'
    if (char === toReplace) {
      outputStr =  '!';
    
    }
  }
  return outputStr;
}

function repeatIt(str, num) {
  let outputStr = "";
  if (num < 0) 
  {return ""}
  //let num1 = "";
    for(let i = 0; i <num; i++ ) {
        outputStr += str;
    }
    return outputStr;
}

function truncate(str) {

}

function ciEmailify(str) {
  newStr = '';
  for (let i =0;  i < str.length; i++) {
    newStr = str + '.' + '@codeimmersives.com' ;
}
  return newStr;
}

function reverse(str) {
  newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
}
  return newStr;
}


function onlyVowels(str) {
let output = "";
for (const char of str) {
  const lowerCaseChar = char.toLowerCase();
  if (lowerCaseChar === 'a' || 
      lowerCaseChar === 'e' ||
      lowerCaseChar === 'i' ||
      lowerCaseChar === 'o' ||
      lowerCaseChar === 'a' ){
        output += char;
      }
      }
    
        return output;
    }

    // let VowelStr = '';
    
  //   for (let i = 0; i <= str.length; i++) {
  //     const isVowel = ( 'a', 'e', 'i', 'o', 'u');
  //     if () {
  //       VowelStr = isVowel;
  //     }
  //   }
    
  //   return VowelStr;
  // }


function crazyCase(str) {
  let output = '';
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (i % 2 === 0){
      output += char.toLowerCase();

    }else {
      output += char.toUpperCase();
    }
  }
  return output
  }



function titleCase(str) {
  let output ='';
  let shouldCap = true
  for (const char of str) {
   if (shouldCap){
     output += char.toUpperCase();
   } else {
     output += char.toLowerCase()
   }  
  
   if (char === " "){
     shouldCap = true;
   } else{
     shouldCap = false;
   } 
  }
  return output 
}

function camelCase(str) {
  let output = '';
  let shouldCap = false;
  for (const char of str) {
    if (char !== ' ') {
      if(shouldCap) {
        output += char.toUpperCase();
      } else {
        output += char.toLowerCase()
      }
    } 
    if (char === ' ') {
      shouldCap= true;
    } else {
      shouldCap = false;
    }
  }
  return output
}

function crazyCase2ReturnOfCrazyCase(str) {
  let output = '';
  let shouldCap = false;
  for (const char of str) {
    if (shouldCap) {
       output += char.toUpperCase();
      } else {
        output += char.toLowerCase()
      }
    
    if (char !== ' ') {
     shouldCap = !shouldCap;
    }
  }
  return output

}
  
  
  



  








 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
