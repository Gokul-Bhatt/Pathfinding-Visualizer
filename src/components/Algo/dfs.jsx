export const dfs = (start, target, ROWS, COLS) => {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];

    const visited = Array.from({ length: ROWS }, () =>
        Array(COLS).fill(false)
    );
    const prev = Array.from({ length: ROWS }, () =>
        Array(COLS).fill(null)
    );

    const visitedNodes = [];

    function dfsHelper(row, col) {
        if (
            row < 0 || col < 0 ||
            row >= ROWS || col >= COLS ||
            visited[row][col]
        ) return false;

        visited[row][col] = true;
        visitedNodes.push({ row, col });
        if (row === target.row && col === target.col) return true;

        for (let [dx, dy] of directions) {
            let nr = row + dx;
            let nc = col + dy;

            if (
                nr >= 0 && nc >= 0 &&
                nr < ROWS && nc < COLS &&
                !visited[nr][nc]
            ) {
                prev[nr][nc] = { row, col };

                if (dfsHelper(nr, nc)) return true;
            }
        }

        return false;
    }

    dfsHelper(start.row, start.col);

    if (!visited[target.row][target.col]) {
        return { visitedNodes, path: [] };
    }
    const path = [];
    let curr = target;

    while (curr) {
        path.push(curr);
        curr = prev[curr.row][curr.col];
    }

    return { visitedNodes, path: path.reverse() };
};