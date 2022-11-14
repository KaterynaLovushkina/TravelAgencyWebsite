import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
    `
export const CatalogWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
    `
export const CatalogSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: relative;
 
  height: max-content;
  z-index: 4;
  
`
export const SearchTitle = styled.h1`
    font-size: 20px;
    color: #555;
    margin-bottom: 20px; 
    `

export const CatalogResult = styled.div`
  flex: 3;
  
`
export const SearchItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
`

export const SearchInput = styled.input`
    height: 40px;
    border: none;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
`
export const SearchSpan = styled.span`
    height: 40px;
    border: none;
    padding: 10px;
    font-size: 14px;
    background: white;
    border-radius: 5px;
    cursor: pointer;
`
export const OptionItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
    font-size: 14px;
    `

export const OptionInput = styled.input`
     width: 50px;
     text-align: center;
     border:none;
     border-radius: 5px;
    cursor: pointer;
`
export const OptionsContainer = styled.div`
    padding: 10px;
    `
export const SearchButton = styled.button`
  background-color: #4a74b3;
  color: white;
  font-size: 14px;
  height: 30px;
  border: none;
  border-radius: 10px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`

export const SearchContainer = styled.div`
    flex: 1;
  
    `
export const DownPart = styled.div`
    display: flex;
    flex-direction: column;
    
    position: sticky;
    top:390px;
 
`
