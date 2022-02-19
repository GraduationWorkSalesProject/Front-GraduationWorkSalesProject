import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const SearchBar = () => {
  const history = useHistory();
  const handleSearch = async (keyword: string) => {
    history.push({
      pathname: '/searchProduct',
      state: keyword,
    });
  };

  const onKeyUp = useCallback((e) => {
    const keyword = e.target.value;
    if (e.keyCode === 13 && e.target.value.trim() !== '') {
      handleSearch(keyword);
    }
    // eslint-disable-next-line
  }, []);

  return <SearchWrapper onKeyUp={onKeyUp} />;
};

const SearchWrapper = styled.input`
  height: 40px;
  width: 550px;
  border: 1px solid darkviolet;
  padding: 10px;
  outline: none;
`;

export default SearchBar;
