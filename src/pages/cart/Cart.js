import React, {useEffect, useState} from 'react';
import Navbar from "../../components/NavBar/navbar";
import {
    CartContainer, Title, Info, Btn, DateTxt,
    StartShopping, LinkCatalog, CartEmpty,
    CartItem, ImagTrip, Count, CartProduct,
    NameProduct, ProductInfo, CartTotalPrice, CartQuantity,
    CartPrice, Subtotal, ClearCart, BtnCheck, CartCheckout,
    CartSummary, ContinueShopping, Titles, ProductTitle, CartItems, MinusPlus
}
    from "./cartElements"
import {useDispatch, useSelector} from "react-redux";
import {Link, useLocation, useNavigate} from "react-router-dom";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import {DownPart} from "../trip/tripElements";
import {addToCart, clearCart, decreaseCart, getTotals, removeFromCart} from "../../redux/cartSlices";

const Cart = () => {
    // const location = useLocation();
    const dispatch = useDispatch()
    const chosenDate = useLocation().state.selectedOption
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1
        }
    );
    const navigate = useNavigate();
    const handleCatalog = () =>{
        navigate("/catalog", {state:{destination,date,options }})
    }
    const handleCheckOut = () =>{
        navigate("/form")
    }

    const cart = useSelector((state) => state.cart);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };
    const handleDecreaseFromCart = (product) => {
        dispatch(decreaseCart(product));
    };
    const handleRemove = (cartItem) =>{
        dispatch(removeFromCart(cartItem))
    }
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    useEffect(() =>{
        dispatch(getTotals())
    },[cart])


    return (
        <>
            <Navbar></Navbar>
            <CartContainer>
                <Title>Booking Cart</Title>
                {cart.cartItems.length === 0 ? (
                    <CartEmpty>
                        <Info>Your cart is currently empty</Info>
                        <StartShopping>
                            <LinkCatalog onClick = {handleCatalog}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="bi bi-arrow-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                    />
                                </svg>
                                <p>Choose your dream trip</p>
                            </LinkCatalog>
                        </StartShopping>
                    </CartEmpty>
                ) :(
                    <>
                        <Titles>
                            <ProductTitle>Trip</ProductTitle>
                            <ProductTitle>Date</ProductTitle>
                            <ProductTitle>Price</ProductTitle>
                            <ProductTitle>Quantity</ProductTitle>
                            <ProductTitle>Total</ProductTitle>
                        </Titles>
                        <CartItems>
                            {cart.cartItems?.map(cartItem => (
                                <CartItem key ={cartItem._id}>
                                    <CartProduct>
                                        <ImagTrip src={cartItem.photos[0]} alt={cartItem.nameTrip}></ImagTrip>
                                        <ProductInfo>
                                            <NameProduct>{cartItem.nameTrip}</NameProduct>
                                            <Btn onClick ={() => handleRemove(cartItem)}>Remove</Btn>
                                        </ProductInfo>
                                    </CartProduct>
                                    <DateTxt>{chosenDate}</DateTxt>
                                    <CartPrice>${cartItem.price}</CartPrice>
                                    <CartQuantity>
                                        <MinusPlus onClick ={() => handleDecreaseFromCart(cartItem)}>-</MinusPlus>
                                        <Count>{cartItem.cartQuantity}</Count>
                                        <MinusPlus onClick ={() => handleAddToCart(cartItem)}>+</MinusPlus>
                                    </CartQuantity>
                                    <CartTotalPrice>
                                        ${cartItem.price * cartItem.cartQuantity}
                                    </CartTotalPrice>
                                </CartItem>

                            ))}
                        </CartItems>
                        <CartSummary>
                            <ClearCart onClick ={() => handleClearCart()}>Clear Cart</ClearCart>
                            <CartCheckout>
                                <Subtotal>
                                    <span>Subtotal</span>
                                    <span>${cart.cartTotalAmount}</span>
                                </Subtotal>
                                <p>Taxes and Shipping calculated at checkout</p>
                                <BtnCheck onClick={() => handleCheckOut()}>Check out</BtnCheck>
                                <ContinueShopping>
                                    <LinkCatalog onClick = {handleCatalog}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            className="bi bi-arrow-left"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                                            />
                                        </svg>
                                        <p>Continue Traveling</p>
                                    </LinkCatalog>
                                </ContinueShopping>
                            </CartCheckout>
                        </CartSummary>
                        </>
                )}

            </CartContainer>
            <DownPart>
                <MailList></MailList>
                <Footer></Footer>
            </DownPart>
        </>
    );
};

export default Cart;