import React, { useEffect } from 'react';
import Carousel from '../components/Carousel';
import CategoryMap from '../components/CategoryMap';
import BestData from '../components/Main/BestData';
import RecentData from '../components/Main/RecentData';

const MainPage = () => {
  return (
    <>
      <Carousel />
      <BestData />
      <CategoryMap />
      <RecentData />
    </>
  );
};

export default MainPage;
