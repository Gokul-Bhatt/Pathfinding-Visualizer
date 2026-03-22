import React, { useState } from 'react';
import "./home.css";

const Controls = ({ runBfs, runDfs, runDijkstra }) => {
  const [algo, setAlgo] = useState("");
  const handleRun = () => {
    console.log("Selected Algo:", algo);
    if (algo === "bfs" && runBfs) {
      runBfs();
    } else if (algo === "dfs" && runDfs) {
      runDfs();
    } else if (algo === "dijkstra" && runDijkstra) {
      runDijkstra();
    } else {
      alert("Algo not selected or function missing");
    }
  };

  return (
    <div className="controls">
      <select
        className="drop"
        onChange={(e) => setAlgo(e.target.value)}
      >
        <option value="">Select Algorithm</option>
        <option value="bfs">BFS</option>
        <option value="dfs">DFS</option>
        <option value="dijkstra">Dijkstra</option>
      </select>
      <button onClick={handleRun} className="rbtn">
        Run Algorithm
      </button>
       <div className='item'>
        <table className="grid">
          <tbody>
            <tr>
              <td className="unvisited"></td>
            </tr>
          </tbody>
        </table>
        <h3>Unvisited Node</h3>
      </div>
      <div className='item'>
        <table className="grid">
          <tbody>
            <tr>
              <td className="shortpath"></td>
            </tr>
          </tbody>
        </table>
        <h3>Shortest-path Node</h3>
      </div>
      <div className='item'>
        <table className="grid">
          <tbody>
            <tr>
              <td className="visitedpath"></td>
            </tr>
          </tbody>
        </table>
        <h3>Visited Nodes</h3>
      </div>
    </div>
  );
};

export default Controls;