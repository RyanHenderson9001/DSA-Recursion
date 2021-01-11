function toBinary(number){
  if(number === 0){
    return number.toString();
  }
  if(number === 1){
    return number.toString();
  }
  return toBinary(Math.floor(number/2)) + (number %2).toString();  
}

console.log(toBinary(99));