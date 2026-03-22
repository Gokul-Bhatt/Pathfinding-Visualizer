export const bfs = (start, target, ROWS, COLS) => {
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    const visited = Array.from({ length: ROWS }, () =>
        Array(COLS).fill(false)
    );
    const prev = Array.from({ length: ROWS }, () =>
        Array(COLS).fill(null)
    );
    const queue = [];

    queue.push(start);
    visited[start[0]][start[1]] = true;

    while (queue.length) {
        const [r, c] = queue.shift();

        if (r === target[0] && c === target[1]) break;

        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;

            if (
                nr >= 0 && nc >= 0 &&
                nr < ROWS && nc < COLS &&
                !visited[nr][nc]
            ) {
                visited[nr][nc] = true;
                prev[nr][nc] = [r, c];
                queue.push([nr, nc]);
            }
        }
    }
    const path = [];
    let curr = target;

    while (curr) {
        path.push(curr);
        curr = prev[curr[0]][curr[1]];
    }
    path.reverse();

    return path;
};