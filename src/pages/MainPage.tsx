import React from 'react';
import ListGoods from '../components/list-goods/List-goods';
import Carousel from '../components/Carousel';
import CategoryMap from '../components/CategoryMap';

const MainPage = () => {
  return (
    <>
      <Carousel /> 
      <ListGoods title="Best ITEMS"/>
      <CategoryMap />
      <ListGoods title="New ITEMS"/>
    </>
  );
};

export default MainPage;
