function powerCalculator(Base,power){
  if(power<0){
    return 'power should be 0 or greater';
  }
  if(power===0){
    return 1;
  }
  if(power===1){
    return Base;
  }
  return Base * powerCalculator(Base,power-1);


}
console.log(powerCalculator(10,2));
console.log(powerCalculator(2,4));