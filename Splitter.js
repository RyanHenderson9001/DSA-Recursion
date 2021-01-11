function strSplit(str,splitter,arr,count){
  if(str.length===0){
    return arr;
  }

  let [check,...remainder] = str;
  if(arr[count]===undefined){
    arr[count] = '';
  }
  if(check===splitter){
    count = count +1;

  }else{
    arr[count]+=check.toString();
  }
  return strSplit(remainder,splitter,arr,count);
}
let empty = [];
console.log(strSplit('02/20/2020','/',empty,0));