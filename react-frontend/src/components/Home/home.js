import React from 'react';
import HomeBanner from './homebanner';
import CardList from './cardlist';
import '../../css/home.css';
import '../../css/global.css';

function Home() {
  return (
    <div className="pageContainer">
      <HomeBanner />
      <CardList />
    </div>
  );
}

export default Home;
