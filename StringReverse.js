function reversal(str){
  if(str===''){
    return str;
  }
  if(str.length===1){
    return str;
  }
  let [last,...leftover] = str;
  return reversal(leftover) + last;
  

}

console.log(reversal('thing'));