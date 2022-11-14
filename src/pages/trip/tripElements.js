import styled from "styled-components";
export const TripContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
export const TripWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`

export const TripTitle = styled.p`
    font-weight: 530;
    font-size: 22px;
    `
export const TripSubTitle = styled.p`
    font-size: 20px;
    font-weight: 520;
    `

export const TripDetails = styled.div`
    display: flex;
    grid-template-columns: 0.8fr 1fr;
    gap:50px
  
    `
export const TripImage = styled.img`
  
    width: 500px;
    max-height: 360px;
    border-radius: 40px;
    object-fit: cover;
    cursor: pointer;
    
    `
export const TripInfo = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 20px
  `

export const TripMain = styled.div`
    padding:  40px 10px;
    display: grid;
    grid-template-columns: 1fr 1.2fr 1fr;
    gap: 40px;
   
    `
export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px
    `
export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px
    `
export const Text = styled.p`
    font-size: 14px;
    `
export const TextTitle = styled.p`
    font-size: 18px;
    `
export const TripDescription = styled.div`
  margin-top: 30px;
   display: grid;
   grid-template-columns: 1fr 0.5fr ;
   grid-gap: 30px;
`
export const DescTitle = styled.p`
    font-size: 20px;
    font-weight: bolder;
    `
export const DescText = styled.p`
  font-size: 16px;
  line-height: 24px;
    
    `
export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: flex-start;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 30px;
  align-items: center;
`
export const DownPart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
 
`
export const PriceInfo = styled.p`
  font-size: 24px;
  font-weight: 600;
  
    `

export const ButtonTrip = styled.button`
    width: 150px;
    padding: 20px 15px;
    background-color: #0071eb;
    color: white;
    font-size: 16px;
    font-weight: 550;
    border: none;
    cursor: pointer;
    border-radius: 20px;
  `

export const BtnContainer= styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px
    
 
`
export const DropDownContainer = styled("div")`
  width: 430px;
`;

export const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.2rem;
  color: #3faffa;
  background: #ffffff;
  cursor: pointer;
`;

export const DropDownListContainer = styled.div``;

export const DropDownList = styled.ul`
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #144e5f;
  font-size: 1.3rem;
  font-weight: 500;

  &:first-child {
    padding-top: 0.8em;
  }

  cursor: pointer;
`;

export const ListItem = styled.div`
  padding: 0 15px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
`;
export const DateText = styled.p`
  font-size: 16px;
  font-weight: 400;
  
    `