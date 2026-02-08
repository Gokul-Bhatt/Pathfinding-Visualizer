import React from "react";
import "./grid.css";
import start from "../../assets/spaceshiptwo-down.svg"
import { useState } from "react";

const ROWS = 20;
const COLS = 46;

const grid = () => {
  const [startNode, setStartNode] = useState(null);
  const [targetNode, setTargetNode] = useState(null);

  const handleCellClick = (row, col) => {
    if (!startNode) {
      setStartNode({ row, col });
      return;
    }
    if (!targetNode && !(startNode.row === row && startNode.col === col)) {
      setTargetNode({ row, col });
    }
  };
  const rows = [];

  for (let row = 0; row < ROWS; row++) {
    const cells = [];

    for (let col = 0; col < COLS; col++) {
      const isStart =
        startNode &&
        startNode.row === row &&
        startNode.col === col;

      const isTarget =
        targetNode &&
        targetNode.row === row &&
        targetNode.col === col;

      let cellClass = "unvisited";
      if (isStart) cellClass = "start";
      else if (isTarget) cellClass = "target";

      cells.push(
        <td
          key={`${row}-${col}`}
          id={`${row}-${col}`}
          className={cellClass}
          onClick={() => handleCellClick(row, col)}
        ></td>
      );
    }

    rows.push(
      <tr key={row}>
        {cells}
      </tr>
    );
  }

  return (
    <table className="grid">
      <tbody>{rows}</tbody>
    </table>
  );
};

export default grid;
