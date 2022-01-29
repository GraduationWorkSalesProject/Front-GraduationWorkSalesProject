import React, { useCallback, useState } from 'react'
import styled from "styled-components"
import { searchProduct } from '../../api/product'


const SearchBar = () => {

    const [data,setData] = useState({});


    const handleSearch = async(keyword:string) =>{
        const sort="최신순";
        let page = 0;
        const response = await searchProduct(keyword,page,sort);
        if(response===null){
            return;
        }
        setData(response);
    }

 
    const onKeyUp = useCallback(
        (e) => { 
        const keyword = e.target.value;  
        if (e.keyCode === 13 && e.target.value.trim() !== '') {
            handleSearch(keyword);
        }
    },[]);
 
    return (
        <SearchWrapper onKeyUp={onKeyUp} />
 
    )
}

const SearchWrapper = styled.input`
  height: 40px;
  width: 550px;
  border: 1px solid darkviolet;
  padding: 10px;
  outline: none;
`;

export default SearchBar
