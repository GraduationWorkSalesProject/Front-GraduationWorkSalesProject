import React from 'react';
import { DataType } from '../../types/goods';
import ListGoods from '../list-goods/List-goods';

const SearchProduct = ({ data }: DataType) => {
  return (
    <>
      <ListGoods data={data} title="검색 결과" />
    </>
  );
};

export default SearchProduct;
