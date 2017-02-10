/*
Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

*/


function isValidSudoku(board) {
  
  let theGrandObject = {}; //One object to rule them all
  
  function checkAndAdd(obj, el){//Creates a new object within theGrandObject for each row/column/square, and checks for the current value in that object
    if (theGrandObject[obj] === undefined){
      theGrandObject[obj] = {};
    }  
    if (theGrandObject[obj][el]){ //If the current value already exists in the corresponding object, return true.
      return true;
    } else {
      theGrandObject[obj][el] = 1;
      return false;
    }
  }
  
  function calculateSquare(forY, forX){//For squares, mathematically determine the correct object name based on the current x and y values
    let xVal = Math.ceil((forX+1)/3);
    let yVal = Math.ceil((forY+1)/3);
    let squareObjName = "square" + xVal + yVal;
    return squareObjName;
  }

  for (let y = 0; y < 9; y++){ //Iterates rows(y-axis)
    for (let x = 0; x < 9; x++){//Iterates 'columns' (x-axis)
      let element = board[y][x];
      
      if (element === "."){//No need to process blank spaces
        continue;
      } else{
        let rowObj = "row" + y;
        let colObj = "col" + x;
        let squareObj = calculateSquare(y, x);
        
        if (checkAndAdd(rowObj, element) || checkAndAdd(colObj, element) || checkAndAdd(squareObj, element)){
          return false; //If the current element is already present in its respective row, column or square, the board is invalid and the program can terminate
        }
      }
    }
  }
  return true;
}