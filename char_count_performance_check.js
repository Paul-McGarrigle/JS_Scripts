function charCount(str){
   var obj = {};
   for(var char of str){
       char = char.toLowerCase();
       if(/[a-z0-9]/.test(char)){
           obj[char] = ++obj[char] || 1;
       }
   } 
   return obj;
}

charCount('Hello hi!')


function charCount2(str){
   var obj = {};
   for(var char of str){
       char = char.toLowerCase();
       if(isAlphaNumeric(char)){
           obj[char] = ++obj[char] || 1;
       }
   } 
   return obj;
}

// Using character codes is faster than regular expressions
function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) &&
       !(code > 64 && code < 91) &&
       !(code > 96 && code < 123)) {
           return false;
     }
     return true; 
}

charCount2('Hello hi!')