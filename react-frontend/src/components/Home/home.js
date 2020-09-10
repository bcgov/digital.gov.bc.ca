import React from 'react';
import HomeBanner from './homebanner';
import CardList from './cardlist';
import '../../css/home.css';

import { PageContainer } from '../StyleComponents/pageContent';

function Home() {
  return (
    <PageContainer>
      <HomeBanner />
      <CardList />
    </PageContainer>
  );
}

export default Home;
