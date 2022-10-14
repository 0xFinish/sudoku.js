function sudokuSolver(sudokuBoard) {
  let board = [...sudokuBoard];

  function solve(board, row, col, val) {
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === val) {
        return false;
      }
    }
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === val) {
        return false;
      }
    }
    let startRow = row - (row % 3);
    let startCol = col - (col % 3);
    for (let i = 0; i < board.length / 3; i++) {
      for (let j = 0; j < board.length / 3; j++) {
        if (board[i + startRow][j + startCol] === val) {
          return false;
        }
      }
    }
    return true;
  }

  function Sudoku(board, row, col) {
    if (row === 8 && col === 9) {
      return true;
    }
    if (col === 9) {
      row += 1;
      col = 0;
    }
    if (board[row][col] !== undefined) {
      return Sudoku(board, row, col + 1);
    }
    for (let num = 1; num <= board.length; num++) {
      if (solve(board, row, col, num)) {
        board[row][col] = num;
        if (Sudoku(board, row, col + 1)) {
          return true;
        }
      }
      board[row][col] = undefined;
    }
    return false;
  }
  if (Sudoku(board, 0, 0)) {
    return board;
  } else {
    console.log("not solvable");
    return [...sudokuBoard];
  }
  
}

function generate() {
  const myArrays = [
    [
      [undefined, undefined, undefined, 7, 4, undefined, 9, undefined, undefined],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        5,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        1,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        5,
      ],
      [
        3,
        undefined,
        undefined,
        2,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [undefined, 2, 8, undefined, undefined, undefined, undefined, 5, 4],
      [undefined, undefined, 5, undefined, 6, undefined, 8, 9, undefined],
      [4, 3, undefined, 9, undefined, 7, undefined, undefined, undefined],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        6,
      ],
      [8, undefined, undefined, undefined, undefined, 2, undefined, 3, undefined],
    ],
    [
      [undefined, undefined, undefined, undefined, undefined, 6, undefined, 8, 5],
      [undefined, undefined, 3, undefined, undefined, undefined, 9, undefined, 7],
      [
        undefined,
        1,
        undefined,
        undefined,
        4,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [1, 8, undefined, 9, undefined, undefined, undefined, undefined, undefined],
      [
        undefined,
        undefined,
        7,
        undefined,
        undefined,
        undefined,
        3,
        undefined,
        undefined,
      ],
      [
        undefined,
        4,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [8, undefined, undefined, 7, 6, undefined, undefined, 3, undefined],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        1,
        undefined,
        undefined,
        9,
      ],
      [undefined, undefined, undefined, undefined, 9, 4, 2, undefined, undefined],
    ],
    [
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        5,
        2,
        8,
      ],
      [
        4,
        7,
        undefined,
        1,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        3,
        8,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        1,
        7,
        8,
        undefined,
        undefined,
        undefined,
        3,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        9,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        4,
        undefined,
        undefined,
        undefined,
        1,
      ],
      [
        undefined,
        undefined,
        undefined,
        9,
        5,
        8,
        7,
        undefined,
        undefined,
      ],
      [
        5,
        undefined,
        undefined,
        undefined,
        undefined,
        3,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        2,
        undefined,
        undefined,
        undefined,
        undefined,
        6,
        undefined,
        undefined,
      ],
    ],
    [
      [
        undefined,
        undefined,
        1,
        undefined,
        undefined,
        undefined,
        4,
        undefined,
        3,
      ],
      [
        2,
        undefined,
        undefined,
        6,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        8,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        undefined,
        undefined,
        9,
        undefined,
        undefined,
        undefined,
        8,
        undefined,
      ],
      [
        undefined,
        2,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        9,
        undefined,
      ],
      [
        undefined,
        7,
        undefined,
        undefined,
        1,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        5,
        undefined,
        undefined,
        undefined,
        4,
        undefined,
        1,
        undefined,
        undefined,
      ],
      [
        8,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        3,
        undefined,
        undefined,
      ],
      [
        9,
        undefined,
        6,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        5,
      ],
    ],
    [
      [
        undefined,
        undefined,
        undefined,
        undefined,
        7,
        undefined,
        8,
        undefined,
        6,
      ],
      [
        6,
        undefined,
        undefined,
        4,
        undefined,
        undefined,
        undefined,
        undefined,
        3,
      ],
      [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        5,
        undefined,
        undefined,
      ],
      [
        5,
        undefined,
        undefined,
        3,
        undefined,
        undefined,
        1,
        undefined,
        undefined,
      ],
      [
        9,
        undefined,
        undefined,
        6,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        8,
        undefined,
        undefined,
        undefined,
        undefined,
        9,
        undefined,
        undefined,
        undefined,
      ],
      [
        undefined,
        4,
        7,
        undefined,
        undefined,
        undefined,
        undefined,
        9,
        undefined,
      ],
      [
        undefined,
        8,
        undefined,
        undefined,
        1,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
      [
        2,
        undefined,
        undefined,
        5,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
      ],
    ],
  ]
  let randomBoard = myArrays[Math.floor(Math.random() * 4)];
  let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let shuffledNumbers = {};
  for (let i = 1; i < 10; i++) {
    let randomNumberFromArray = Math.floor(
      Math.random() * arrayOfNumbers.length
    );
    shuffledNumbers[i.toString()] = arrayOfNumbers[randomNumberFromArray];
    arrayOfNumbers.splice(randomNumberFromArray, 1);
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      randomBoard[i][j] = shuffledNumbers[randomBoard[i][j]];
    }
  }

  if (Math.random() > 0.5) {
    let flippedHorizontally = []
    for (let i = 8; i >= 0; i--) {
      flippedHorizontally.push(randomBoard[i])
    }
    randomBoard = flippedHorizontally
  }

  return randomBoard;
}

export { sudokuSolver, generate };
