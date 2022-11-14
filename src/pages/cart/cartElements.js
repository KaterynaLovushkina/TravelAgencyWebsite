import styled from "styled-components";
import { Link as LinkR} from 'react-router-dom'

export const CartContainer= styled.div`
  padding: 2rem 4rem;
    `
export const Title= styled.h2`
  font-weight: 400;
  font-size: 30px;
  text-align: center;
    `
export const CartEmpty= styled.div`
  font-size: 20px;
  margin-top: 2rem;
  color: rgb(84, 84, 84);
  display: flex;
  flex-direction: column;
  align-items: center;
    `
export const Info= styled.p`
    `
export const StartShopping= styled.div`
  margin-top: 2.5rem;
`

export const LinkCatalog = styled.li`
  cursor: pointer;
  text-decoration: none;
  color: #0071eb;
  font-weight: 600;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: 0.5rem;
  
`
export const CartItems = styled.h3`
 
    `
export const CartItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1.1fr 0.8fr 1fr 0.8fr;
  column-gap: 0.5rem;
  border-top: 1px solid rgb(187, 187, 187);
  padding: 1rem 0;
 
    `
export const CartProduct = styled.div`
  display: flex;
    `
export const ImagTrip = styled.img`
  display: inline-block;
  height: 150px;
  width: 200px;
  border: none;
  border-radius: 10px;
  margin-right: 1rem;
 
    `
export const ProductInfo = styled.div`
 
    `
export const NameProduct = styled.h3`
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 400;
    `
export const Btn = styled.button`
  font-size: 15px;
  border: none;
  outline: none;
  margin-top: 0.7rem;
  cursor: pointer;
  background: none;
  color: gray;

  &:hover {
    color: #000000;
  }

`
export const CartPrice = styled.div`
  font-size: 17px;
    `
export const CartQuantity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100px;
  max-width: 100%;
  border: 0.5px solid rgb(177, 177, 177);
  border-radius: 5px;
    `
export const MinusPlus = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
    `

export const Count = styled.div`
  padding: 0.7rem 0;
    `
export const CartTotalPrice = styled.div`
  padding-right: 0.5rem;
  justify-self: center;
  font-size: 17px;
  font-weight: 700;
`
export const CartSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-top: 1px solid rgb(187, 187, 187);
  padding-top: 2rem;
    `
export const ClearCart = styled.button`
  width: 130px;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  border: 0.5px solid rgb(177, 177, 177);
  color: gray;
  background: none;
  outline: none;
  cursor: pointer;
    `
export const CartCheckout = styled.div`
  width: 280px;
  max-width: 100%;
  
    `
export const Subtotal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  margin-bottom: 10px;
    `
export const BtnCheck = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1.15px;
  background-color: #4b70e2;
  color: #f9f9f9;
  border: none;
  outline: none;
  cursor: pointer;
    `
export const ContinueShopping = styled.div`
  margin-top: 1rem;
  
    `
export const Titles = styled.div`
  margin: 2rem 0 1rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: 3fr 1.1fr 0.8fr 1fr 0.8fr;
  column-gap: 0.5rem;
    `
export const ProductTitle = styled.h3`
  font-size: 15px;
  font-weight: 450;
  text-transform: uppercase;
    `

export const DateTxt = styled.p`
  font-size: 17px;
  padding-right: 10px;
  font-weight: 450;
  line-height: 28px;
    `