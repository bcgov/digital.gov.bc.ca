import React from 'react';
import HomeHeader from './homeheader';
import CardList from './cardlist';
import '../../css/home.css';

function Home() {
  return (
    <div className="homeContainer">
      <HomeHeader />
      <CardList />
    </div>
  );
}

export default Home;
