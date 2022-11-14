import styled from "styled-components";

export const FooterContainer = styled.div`
  
    width: 100%;
    padding: 30px 80px;
    background-color: #064987;
    display: grid;
    grid-template-columns: 1fr 1fr  0.6fr;
    
`
export const ListItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
   
   
`
export const HeadingItem = styled.h3`
   font-family: "Arial Rounded MT Bold", serif;
   color: #fff;
   font-size: 1.3rem;
   font-weight: 520;
   padding-bottom: 10px;
`
export const Item = styled.p`
  font-family: inherit;
  color: #fff;
  font-size: 1rem;
  font-weight: 420;
  padding-bottom: 5px;
  cursor: pointer;
  position: relative;
  
  
   
`
export const Cards = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
`
export const Card = styled.img`
    height: 35px;
    width: 45px;
    border: none;
    border-radius: 5px;
    
   
`