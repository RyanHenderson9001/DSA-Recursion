function sheepCount(sheepNumber){
  if(sheepNumber<0){
    return;
  }
  console.log(sheepNumber);
  sheepCount(sheepNumber-1);
}

sheepCount(3);