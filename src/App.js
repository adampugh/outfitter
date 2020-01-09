import React from 'react';
import "./styles/index.scss";

import Grid from './components/grid';
import Navbar from './components/navbar';
// import BlackDrip from './components/blackdrip';
import Wishlist from './components/wishlist';
import ComicsGrid from './components/comicsGrid';
import ComicsWishlist from './components/comicWishlist';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Grid />
      <Wishlist />
      <ComicsGrid />
      <ComicsWishlist />
    </div>
  );
}

export default App;
