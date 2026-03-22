export const bfs = (start, target, ROWS, COLS) => {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];

    const visited = Array.from({ length: ROWS }, () =>
        Array(COLS).fill(false)
    );

    const prev = Array.from({ length: ROWS }, () =>
        Array(COLS).fill(null)
    );

    const queue = [];
    const visitedNodes = [];

    queue.push(start); 
    visited[start.row][start.col] = true;

    while (queue.length) {
        const node = queue.shift();
        visitedNodes.push(node);

        if (node.row === target.row && node.col === target.col) break;

        for (let [dx, dy] of directions) {
            let nr = node.row + dx;
            let nc = node.col + dy;

            if (
                nr >= 0 && nc >= 0 &&
                nr < ROWS && nc < COLS &&
                !visited[nr][nc]
            ) {
                visited[nr][nc] = true;
                prev[nr][nc] = node;
                queue.push({ row: nr, col: nc });
            }
        }
    }

    const path = [];
    let curr = target;

    while (curr) {
        path.push(curr);
        curr = prev[curr.row][curr.col];
    }

    return { visitedNodes, path: path.reverse() };
};