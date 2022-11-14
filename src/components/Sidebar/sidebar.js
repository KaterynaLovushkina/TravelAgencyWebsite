import React from 'react';
import {SidebarContainer,
    Icon,CloseIcon,
    SidebarRoute,
    SidebarWrapper,

    SidebarLink,
    SidebarMenu
}
    from './SidebarElements'
import './sidebar.css'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick ={toggle}>
            <Icon onClick ={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to={'book'}>Book</SidebarLink>
                    <SidebarLink to={'about'}>About</SidebarLink>
                    <SidebarLink to={'reviews'}>Reviews</SidebarLink>
                </SidebarMenu>
                <SidebarRoute to={'signin'}>Sign In</SidebarRoute>
                <SidebarRoute className='sign_up' to='signup'>Sign Up</SidebarRoute>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;