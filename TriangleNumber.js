function triangleNumber(row){
  if(row===1){
    return row;
  }

  return row + triangleNumber(row-1);
}

console.log(triangleNumber(9));