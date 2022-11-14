import React from 'react';
import './footer.css'

import {FooterContainer, Item, HeadingItem, ListItem, Card, Cards} from './FooterElements'
const Footer = () => {

    return (
        <FooterContainer>
            <ListItem>
                <HeadingItem>General</HeadingItem>
                <Item className={'item_name'}>Home</Item>
                <Item className={'item_name'}>Book</Item>
                <Item className={'item_name'}>About</Item>
                <Item className={'item_name'}>Reviews</Item>
            </ListItem>
            <ListItem>
                <HeadingItem>Top Destinations</HeadingItem>
                <Item className={'item_name'}>New York City</Item>
                <Item className={'item_name'}>Paris</Item>
                <Item className={'item_name'}>Rom</Item>
                <Item className={'item_name'}>Prague</Item>
                <Item className={'item_name'}>Kyiv</Item>
            </ListItem>
            <ListItem>
                <HeadingItem>Ways You Can Pay</HeadingItem>
                <Cards>
                    <Card src={require('../../images/cards/paypal.png')}></Card>
                    <Card src={require('../../images/cards/applepay.png')}></Card>
                    <Card src={require('../../images/cards/bitcoin.jpeg')}></Card>
                    <Card src={require('../../images/cards/visa.png')}></Card>
                    <Card src={require('../../images/cards/mono.png')}></Card>
                    <Card src={require('../../images/cards/privat.png')}></Card>
                    <Card src={require('../../images/cards/mastercard.png')}></Card>
                    <Card src={require('../../images/cards/alpha.png')}></Card>
                    <Card src={require('../../images/cards/pumb.png')}></Card>
                </Cards>
            </ListItem>
        </FooterContainer>
    );
};

export default Footer;