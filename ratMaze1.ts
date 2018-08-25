const ratMaze1 = () => {
  const path: Array<Array<number>> = [
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1],
  ];

  const length: number = 5;

  let solution: Array<Array<number>> = [
    ...Array(length)
  ].map(() => [...Array(length)].map(() => 0));

  const printMatrix = (matrix: number[][]): void => {
    for (let i in matrix) {
      console.log(matrix[i]);
    }
  }

  const findPath = (i: number, j: number): boolean => {
    if (i === length - 1 && j === length - 1) {
      solution[i][j] = 1;
      return true;
    } else if (i >= length || j >= length) {
      return false
    } else if (path[i][j]) {
      solution[i][j] = 1;
      if (findPath(i, j + 1)) {
        return true;
      } else if (findPath(i + 1, j)) {
        return true;
      } else {
        solution[i][j] = 0;
        return false;
      }
    } else {
      return false;
    }
  }

  if (findPath(0, 0)) {
    printMatrix(solution);
  } else {
    console.log(-1);
  }
}

export default ratMaze1;
