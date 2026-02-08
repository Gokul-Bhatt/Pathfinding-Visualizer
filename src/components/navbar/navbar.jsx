import React from "react";
import "./navbar.css"

export const navbar = () => {
  return (
    <div className="navbar">
      <h1 className="path">Pathfinding Visualizer</h1>
      <div className="dropdown-container">
        <select className="drop">
          <option>Select Algorithm</option>
          <option value="bfs">BFS</option>
          <option value="dfs">DFS</option>
          <option value="dijkstra">Dijkstra</option>
        </select>
      </div>
      <button type="submit" className="btn">FIND</button>
    </div>
  );
};

export default navbar;
