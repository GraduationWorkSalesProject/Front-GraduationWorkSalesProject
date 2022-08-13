import React from 'react';
import { DataType } from '../../types/goods';
import ListGoods from '../list-goods/List-goods';
import NoSearchResults from './NoSearchResults';

const SearchProduct = ({ data, keyword }: DataType) => {
  return (
      <>
      {data.length ? (
        <ListGoods data={data}   />
      ) : (
        <NoSearchResults search={keyword || ''} />
      )}
    </>
  );
};

export default SearchProduct;
