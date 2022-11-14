import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link as LinkS} from 'react-scroll'
import { Link as LinkR} from 'react-router-dom'


export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #4cbde2;
  display: grid;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`
export const Icon  = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor:pointer;
    outline: none;
    `

export const SidebarWrapper = styled.div`
    color: #fff;
    `
export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  
  @media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
  }
  
`
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 2rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #d4d5d7;
    transition: 0.2s ease-in-out;
  }
`

export const SidebarRoute = styled(LinkR)`
    display: block;
    margin: auto;
    max-width: 250px;
    text-align: center;
    border-radius: 50px;
    margin-bottom: 40px;
    background: rgba(36, 46, 56, 0.85);
    color: #2bb2d2;
    text-decoration: none;
    white-space: nowrap;
    padding: 10px 20px;
    font-size: 25px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(76, 97, 116, 0.85);
    color: #77cfe7;
  }
  
`