import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import SearchIcon from '../common/icons/SearchIcon';
import { debounce } from 'lodash';

const SearchBar = () => {
  const history = useHistory();

  const handleSearch = debounce((keyword: string) => {
    history.push({
      pathname: '/searchProduct',
      state: keyword,
    });
  }, 1000);

  const onKeyUp = useCallback((e) => {
    const keyword = e.target.value;
    if (e.keyCode === 13 && e.target.value.trim() !== '') {
      handleSearch(keyword);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <SearchBox>
      <SearchWrapper
        placeholder="검색어를 입력해주세요"
        onKeyUp={onKeyUp}
      ></SearchWrapper>
      <SearchIconBox>
        <SearchIcon />
      </SearchIconBox>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  position: relative;
`;
const SearchWrapper = styled.input`
  height: 40px;
  width: 550px;
  border: 1px solid darkviolet;
  padding: 10px;
  outline: none;
  ::placeholder {
    color: #8492a6;
  }
`;

const SearchIconBox = styled.div`
  position: absolute;
  top: 7px;
  right: 10px;
`;

export default SearchBar;
