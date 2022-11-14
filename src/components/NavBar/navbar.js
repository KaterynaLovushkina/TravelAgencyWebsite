import React, {useState} from 'react';

import {FaPlane}  from 'react-icons/fa'

import {Nav, NavbarContainer, NavLogo, NavMenu, NavItems, NavLink, NavLinkCatalog, NavBtn, NavBtnLink, NavBtns} from './NavbarElements'
import './navbar.css'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState(null)

    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1
        }
    );
    const navigate = useNavigate()
    const handleSearch = () =>{
        navigate("/catalog", {state:{destination,date,options }})
    }
    const handleCart = () =>{
        navigate("/cart", {state:{selectedOption}})
    }

    const handleLoggedOut = () => {
        localStorage.removeItem("loggedIn")
        toast.info(`Your account has been logged out`, {
            position: 'top-left'
        })
        navigate("/signIn")
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <h1>TRVL <span></span><FaPlane/></h1>
                    </NavLogo>
                    <NavMenu>
                        <NavItems>
                            <NavLinkCatalog className ='nav_link' onClick = {handleSearch} >Book</NavLinkCatalog>

                        </NavItems>
                        <NavItems>
                            <NavLink className ='nav_link'onClick = {handleSearch} >About</NavLink>
                        </NavItems>
                        <NavItems>
                            <NavLinkCatalog className ='nav_link' onClick={handleCart}>Cart</NavLinkCatalog>
                        </NavItems>
                    </NavMenu>
                    <NavBtn
                        onClick = {handleLoggedOut}
                        type="submit">
                        Sign out
                    </NavBtn>

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;

