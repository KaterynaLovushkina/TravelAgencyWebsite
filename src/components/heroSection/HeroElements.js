import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
    `
export const VideoBg = styled.video`
    width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
export const HeroContent = styled.div`
    z-index: 3;
  min-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HeroH1 = styled.h1`
    color: white;
  font-size: 48px;
  text-align: center;
  
  @media screen and (max-width: 768px){
    font-size: 40px;
  }
  @media screen and (max-width: 480px){
    font-size: 32px;
  }

`
export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    min-width: 600px;
  
  @media screen and (max-width: 768px){
    font-size: 24px;
  }
  @media screen and (max-width: 480px){
    font-size: 18px;
  }
`
export const HeroSearchWrapper = styled.div`
  height: 60px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  border-radius: 5px;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
  
    `
export const HeaderSearchItem = styled.div`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
    `
export const HeaderSearchText = styled.span`
    color: lightgray;
    cursor: pointer;
    font-size: 17px;
    z-index: 2;
    `
export const Input = styled.input`
    border: none;
    outline: none;
    font-size: 17px;
    `
export const Options = styled.div`
    position:absolute;
  top: 50px;
  background-color: #fff;
  color: gray;
  border-radius: 5px;
  z-index: 2;
    `
export const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  z-index: 2;
  `
export const OptionCounter = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    color: #000;
  z-index: 2;
  
    `
export const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #3fa0e8;
  cursor: pointer;
  background-color: #fff;
  color:#3fa0e8;
  
  
`
export const HeaderBtn = styled.button`
  background-color: #4a74b3;
  color: white;
  font-size: 14px;
  width: 70px;
  height: 30px;
  border: none;
  border-radius: 10px;
  
    
`
