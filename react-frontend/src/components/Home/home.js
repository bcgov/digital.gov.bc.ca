import React from 'react';
import HomeHeader from './homeheader';
import CardList from './cardlist';

function Home() {
  return (
    <div className="homeContainer">
      <HomeHeader />
      <CardList />
    </div>
  );
}

export default Home;
