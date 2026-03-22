import React from 'react';
import circle from "../../assets/circle.svg";
import start from "../../assets/triangletwo-right.svg";
import "./home.css";

const Home = ({ runDijkstra,runBfs }) => {
  return (
    <div className='home'>
      <div className="controls">
        <button onClick={runDijkstra}>Run Dijkstra</button>
        <button onClick={runBfs} > Run BFS </button>
      </div>
      <div className='item'>
        <img src={circle} alt="" />
        <h3>Target Node</h3>
      </div>

      <div className='item'>
        <img src={start} alt="" />
        <h3>Start Node</h3>
      </div>

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
              <td className="unvisited1"></td>
            </tr>
          </tbody>
        </table>
        <h3>Visited Nodes</h3>
      </div>

      <div className='item'>
        <table className="grid">
          <tbody>
            <tr>
              <td className="unvisited3"></td>
            </tr>
          </tbody>
        </table>
        <h3>Shortest-path Node</h3>
      </div>

    </div>
  );
};

export default Home;