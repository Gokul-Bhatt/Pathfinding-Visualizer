import React, { useState } from "react";
// import Grid from "./Grid";
import Grid from "./grid";
import Home from "./Home";
import { dijkstra } from "./dijkstra";

const ROWS = 20;
const COLS = 46;

const ParentsComponents = () => {
  const [startNode, setStartNode] = useState(null);
  const [targetNode, setTargetNode] = useState(null);

  const runDijkstra = () => {
    if (!startNode || !targetNode) {
      alert("Select start and target");
      return;
    }

    const path = dijkstra(startNode, targetNode, ROWS, COLS);
    animatePath(path);
  };

  const animatePath = (path) => {
    path.forEach((node, index) => {
      setTimeout(() => {
        const el = document.getElementById(
          `${node.row}-${node.col}`
        );
        if (el) el.className = "path";
      }, index * 30);
    });
  };

  return (
    <>
      <Home runDijkstra={runDijkstra} />
      <Grid
        startNode={startNode}
        setStartNode={setStartNode}
        targetNode={targetNode}
        setTargetNode={setTargetNode}
      />
    </>
  );
};

export default ParentsComponents;