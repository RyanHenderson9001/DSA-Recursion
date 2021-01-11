
let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
function wayOutMaze(maze,startRow,startCol){
  if(maze[startRow][startCol]==='*'){
    return false;
  }
  if(maze[startRow[startCol]==='visted']){
    return false;
  }
  if(maze[startRow][startCol]==='e'){
    return true;
  }
  maze[startRow][startCol] = 'visted';
  if(checkR(maze,startRow,startCol)){
      console.log("R")
    return wayOutMaze(maze,startRow,startCol+1);
  }
  if(checkL(maze,startRow,startCol)){
    console.log("L")
    return wayOutMaze(maze,startRow,startCol-1);
  }
  if(checkU(startRow)){
    console.log("U")
   return  wayOutMaze(maze,startRow+1,startCol);
  }
  if (checkD(maze,startRow)){
    console.log("D")
   return  wayOutMaze(maze,startRow-1,startCol);
  } 

}
 wayOutMaze(mySmallMaze,0,0)
function checkU(startRow){
  if(startRow ===0){
    return false;
  }else{
    true;
  }
}

function checkD(maze,startRow){
  if(maze.length-1 ===startRow){
    return false;
  }else{
    true;
  }
}

function checkR(maze,startRow,startCol){
  if(maze[startRow].length-1 ===startCol){
    return false;
  }else{
    return true;
  }
}

function checkL(maze,startRow,startCol){
  if(startCol===0){
    return false;
  }else{
    return true;
  }
}