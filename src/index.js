module.exports = function check(str, bracketsConfig) {
  const open = [ "(", "{", "["];
  const close = [")" , "}", "]"];
  const checkArr= [];
  for (let i= 0; i < str.length; i++) {
    if (open.includes(str[i])) {
      checkArr.push(str[i]);
    } else {
      if(close.indexOf(str[i]) === open.indexOf(checkArr[checkArr.length-1])) {
        checkArr.pop();
      } else {
        return false;
      }
    }
  }
  return checkArr.length === 0; 
    }
 
  
