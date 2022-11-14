import React from 'react';
import styled from "styled-components";
import { Link as LinkR} from 'react-router-dom'

export const Trip = styled.div`
  background-color: #f0f6f6;
  border: solid lightblue;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1.2fr ;
 
  margin-bottom: 20px;

`
export const ImageTrip = styled.img`
  height: 270px;
  width: 90%;
  border: none;
    
    `
export const TripDescription = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    
    `
export const InfoFoot = styled.div`
    margin-top: 30px;
    gap: 60px;
    display: flex;
    
    `
export const Star = styled.div`
    display: flex;
    align-items: center;
    gap: 15px
    `
export const CountriesName = styled.h1`
  font-size: 20px;
  color: #050505;
`
export const InfoTrip = styled.div`
    display: flex;
    gap: 65px
    
    `
export const TravelType = styled.button`
  background-color: #b5f6ca;
  font-size: 12px;
  padding: 5px 8px;
  font-weight: 600;
  border: none;
  border-radius: 5px;

`
export const MainInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: black;
    `
export const DPC = styled.div`
    display: flex;
    gap: 12px;
    `
export const ItemPoint = styled.div`
    display: flex;
    font-size: 14px;
    gap: 4px
    `
export const TripTitle = styled.p`
  font-size: 14px;
  gap: 10px;
  color: #050505;
`
export const Price = styled.p`
  font-size: 14px;
  color: #050505;
`
export const VievButton = styled(LinkR)`
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
  border: 1px solid lightcyan;
  max-width: 100px;
  padding: 4px;
  color: white;
  background-color: #2bb2d2;
  border-radius: 5px;
`