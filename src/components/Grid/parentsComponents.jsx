import React, { useState } from "react";
import Grid from "./grid";
import Home from "../home/home";
import { dijkstra } from "../Algo/dijkstra";
import { bfs } from "../Algo/bfs";

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

     const { visitedNodes, path } = dijkstra(startNode, targetNode, ROWS, COLS);

  animateVisited(visitedNodes, path);
  };

  const runBfs = ()=>{
    if(!startNode || !targetNode){
      alert("select start and target");
      return;
    }
    const {visitedNodes,path} = bfs(startNode, targetNode, ROWS , COLS);
    animateVisited(visitedNodes,path);
  }

const animateVisited = (visitedNodes, path) => {
  visitedNodes.forEach((node, index) => {
    setTimeout(() => {
      const el = document.getElementById(`${node.row}-${node.col}`);

      if (el && el.className !== "start" && el.className !== "target") {
        el.className = "visited";
      }
      if (index === visitedNodes.length - 1) {
        animatePath(path);
      }

    }, index * 10);
  });
};

 const animatePath = (path) => {
  path.forEach((node, index) => {
    setTimeout(() => {
      const el = document.getElementById(`${node.row}-${node.col}`);

      if (el && el.className !== "start" && el.className !== "target") {
        el.className = "path";
      }

    }, index * 30);
  });
};

  return (
    <>
      <Home runDijkstra={runDijkstra} runBfs={runBfs}  />
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