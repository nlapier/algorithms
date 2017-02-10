/*
Code Wars: Conway's Game of Life - Unlimited Edition


Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

1.Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2.Any live cell with two or three live neighbours lives on to the next generation.
3.Any live cell with more than three live neighbours dies, as if by overpopulation.
4.Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.


Each cell's neighborhood is the 8 cells immediately around it. The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)
[[1,0,0],
 [0,1,1],
 [1,1,0]]

-1, -1
0, -1
+1, -1



*/

function getGeneration(cells, generations){
  
  function cell(isAlive, willBeAlive, liveNeighbours, xAddress, yAddress){
  	this.isAlive = isAlive,
  	this.willBeAlive = willBeAlive,
  	this.liveNeighbours = liveNeighbours,
  	this.xAddress = xAddress,
  	this.yAddress = yAddress,
	this.getNeighbors = function(grid){
		
		for (let x = -1; x < 2; x++){
			for (let y = -1; y < 2; y++){
				if(x === 0 && y === 0){
					continue;
				} else if(grid[y][x]){
					this.liveNeighbours++;
				}
			}
		}
		
		if (this.liveNeighbours <  2 || this.liveNeighbours > 3){
			this.willBeAlive = false;
		} else if (this.liveNeighbours === 3){
			this.willBeAlive = true;
		} else if (this.isAlive){
			this.willBeAlive = true;
		} else {
			this.willBeAlive = false;
		}
	} 	
}
  
  let currentGrid;
  
  while (generations){
  	let nextGrid = [];
  	
  	
  }
}