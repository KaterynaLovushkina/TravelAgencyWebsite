import styled from "styled-components";

export const CountriesList = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    max-width: 1024px;
    margin-top: 20px;
    `
export const CountryItem = styled.div`
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
   
`
export const ImagCountry = styled.img`
    
    object-fit: cover;
    width: 500px;
    height: 360px;
    `

export const CountriesNames = styled.div`
    position: absolute;
    bottom: 20px;
    padding-left: 10px;
    `