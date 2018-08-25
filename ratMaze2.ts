const ratMaze2 = (): void => {
  const path: Array<Array<number>> = [
    [2, 1, 0, 0,],
    [3, 0, 0, 1,],
    [0, 1, 0, 1,],
    [0, 0, 0, 1,],
  ];

  const solution: Array<Array<number>> = [
    [1, 0, 0, 0,],
    [0, 0, 0, 0,],
    [0, 0, 0, 0,],
    [0, 0, 0, 0,],
  ];

  const length: number = 4;

  let i: number = 0, j: number = 0;

  function getPath(i: number, j: number): void {
    if (i >= length || j >= length) {
      return null;
    } else {

    }
  }
}