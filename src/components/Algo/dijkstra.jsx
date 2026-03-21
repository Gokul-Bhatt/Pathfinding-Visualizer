export const dijkstra = (start, target, ROWS, COLS) => {
  const directions = [[1,0],[-1,0],[0,1],[0,-1]];

  const visited = Array.from({ length: ROWS }, () =>
    Array(COLS).fill(false)
  );

  const parent = Array.from({ length: ROWS }, () =>
    Array(COLS).fill(null)
  );

  const queue = [];
  const visitedNodes = [];

  queue.push(start);
  visited[start.row][start.col] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    visitedNodes.push(node); 

    if (node.row === target.row && node.col === target.col) {
      break;
    }

    for (let [dx, dy] of directions) {
      const newRow = node.row + dx;
      const newCol = node.col + dy;

      if (
        newRow >= 0 && newRow < ROWS &&
        newCol >= 0 && newCol < COLS &&
        !visited[newRow][newCol]
      ) {
        visited[newRow][newCol] = true;
        parent[newRow][newCol] = node;
        queue.push({ row: newRow, col: newCol });
      }
    }
  }

  const path = [];
  let curr = target;

  while (curr) {
    path.push(curr);
    curr = parent[curr.row][curr.col];
  }

  return { visitedNodes, path: path.reverse() };
};