import React, { useState, useEffect } from 'react';
import { searchProduct } from '../api/product';
import { useLocation } from 'react-router';
import { GoodsProps } from '../types/goods';
import SearchProduct from '../components/Search/SearchProduct';

interface LocationProps {
  state: string;
}

const ProductSearchPage = () => {
  const [searchData, setSearchData] = useState<GoodsProps[]>([]);
  const location: LocationProps = useLocation();

  const getSearchData = async () => {
    const sort = '최신순';
    let page = 0;
    const response = await searchProduct(location.state, sort, page);
    if (response === null) {
      return;
    }
    setSearchData(response.data);
  };

  useEffect(() => {
    getSearchData();
    // eslint-disable-next-line
  }, []);

  if (!searchData) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <SearchProduct data={searchData} />
    </div>
  );
};

export default ProductSearchPage;
