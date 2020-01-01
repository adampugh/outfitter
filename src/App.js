import React from 'react';
import "./styles/index.scss";

import Grid from './components/grid';
import Navbar from './components/navbar';
// import BlackDrip from './components/blackdrip';
import Wishlist from './components/wishlist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid />
      {/* <BlackDrip /> */}
      <Wishlist />
    </div>
  );
}

export default App;
