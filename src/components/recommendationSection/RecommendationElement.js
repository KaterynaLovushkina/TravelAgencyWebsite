import styled from "styled-components";

export const RecommendationList = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
export const ListItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 1.5em;
    cursor: pointer;
    padding: 10px;

`
export const ListImg = styled.img`
    display: inline-block;
    height: 260px;
    width: 100%;
    border: none;
    border-radius: 10px;

`


export const ItemText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Button = styled.button`
    padding: 15px 40px;
    font-size: 18px;
    background-color: #0071eb;
    color: white;
    border: none;
    border-radius: 10px;
    max-width: 200px;
    margin: auto;
    cursor: pointer;
  
`