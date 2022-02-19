import React, { useEffect, useState } from 'react';
import ListGoods from '../components/list-goods/List-goods';
import Carousel from '../components/Carousel';
import CategoryMap from '../components/CategoryMap';
import { loadProductsBest, loadProductsRecent } from '../api/product';

const MainPage = () => {
  const [recentData, setRecentData] = useState([]);
  const [bestData, setBestData] = useState([]);

  const loadRecentData = async () => {
    try {
      const response = await loadProductsRecent();
      setRecentData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const loadBestData = async () => {
    try {
      const response = await loadProductsBest();
      setBestData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadRecentData();
    loadBestData();
  }, []);

  return (
    <>
      <Carousel />
      <ListGoods data={bestData} title="Best ITEMS" />
      <CategoryMap />
      <ListGoods data={recentData} title="New ITEMS" />
    </>
  );
};

export default MainPage;
