import React from 'react'
import './App.css'
import Navbar from './components/navbar/navbar';
import Grid from './components/Grid/grid';
import Home from './components/home/home';

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Grid/>
    </div>
  )

}


export default App;