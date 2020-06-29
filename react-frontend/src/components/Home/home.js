import React from 'react';
import HomeBanner from './homebanner';
import CardList from './cardlist';
import '../../css/home.css';

function Home() {
  return (
    <div className="homeContainer">
      <HomeBanner />
      <CardList />
    </div>
  );
}

export default Home;
