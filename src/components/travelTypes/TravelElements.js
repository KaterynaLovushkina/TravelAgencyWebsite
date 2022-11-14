import styled from "styled-components";

export const TypesList = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
  
`


export const ListItem = styled.div`
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 20px;
    box-shadow: none;
    transition: box-shadow .2s ease-in-out;
`
export const TypeTitle = styled.div`
    font-size: 18px;
    padding-bottom: 4px;
`
export const TypeImg = styled.img`
    max-width: 200px;
    height: 80%;
    border-radius: 5px;
    padding-bottom: 18px;
`
export const CountTripTypes = styled.p`
  color: #979696;
  font-weight:50;
  font-size: 15px;
`