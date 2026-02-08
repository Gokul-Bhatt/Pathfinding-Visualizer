import React from 'react'
import circle from "../../assets/circle.svg";
import star from "../../assets/spaceshiptwo-down.svg";
import start from "../../assets/triangletwo-right.svg";
import "./home.css";

export const home = () => {
  return (
    <div className='home'>
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
                 <td id="0-0" className="unvisited"></td>
            </tr>
            </tbody>
        </table>
            <h3>Unvisited Node</h3>
        </div>
         <div className='item'>
            <table className="grid">
            <tbody>
              <tr>
                 <td id="0-0" className="unvisited1"></td>
                  {/* <td id="0-1" className="unvisited2"></td> */}
            </tr>
            </tbody>
        </table>
            <h3>Visited Nodes</h3>
        </div>
         <div className='item'>
            <table className="grid">
            <tbody>
              <tr>
                 <td id="0-0" className="unvisited3"></td>
            </tr>
            </tbody>
        </table>
            <h3>Shortest-path Node</h3>
        </div>
    </div>
    
  )
}

export default home;