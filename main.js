function palindrome(str) {
  var newStr = "";
  for(let i=0;i<str.length;i++){
    if(str[i].match(/[a-z0-9]/i)){
      newStr += str[i].toLowerCase();
    }
  }
  var flag = true;
  for(let j=0,k=newStr.length-1;j<newStr.length;j++,k--){
    if(newStr[j] != newStr[k]){
      flag = false;
    }
  }
  console.log(newStr);
  return flag;
}


palindrome("A man, a plan, a canal. Panama");
