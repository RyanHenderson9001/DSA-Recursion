function fibonacci(number){
  if(number===1){
    return 1;
  }
  if(number===2){
    return 1;
  }
  return fibonacci(number-2) + fibonacci(number-1);
}

console.log(fibonacci(3));