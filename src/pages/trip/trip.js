import React, {useState} from 'react';
import Sidebar from "../../components/Sidebar/sidebar";
import Navbar from "../../components/NavBar/navbar";
import {AiTwotoneCalendar} from "react-icons/ai";
import {RiHotelLine} from "react-icons/ri";
import {GiMeal} from "react-icons/gi";
import {FaTelegramPlane} from "react-icons/fa";
import {IoMdMap} from "react-icons/io";
import {GiModernCity} from "react-icons/gi";
import Scotland from "../../images/recommend_img/bora-bora.jpeg"
import {TripInfo, TripTitle, TripSubTitle,
    TripImage,Item, ItemInfo, TripContainer,
    TripDetails, TripWrapper, TripMain,
    Text, TextTitle, DescTitle, DescText,
    TripDescription, Desc, Info, DownPart,
    PriceInfo, ButtonTrip, BtnContainer,
    DropDownContainer, ListItem, DropDownHeader,
    DropDownList, DropDownListContainer, DateText

} from "./tripElements"

import { useDispatch } from 'react-redux'
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import {Button} from "semantic-ui-react";
import {useHistory, useLocation, useNavigate} from "react-router-dom";
import Dropdown from "react-dropdown";
import './trip.css'
import Trips from "../../components/models/Trips";
import useFetch from "../../hooks/useFetch";
import ReactLoading from "react-loading";
import {addToCart} from "../../redux/cartSlices";
import {toast} from "react-toastify";

const Trip = () => {
    const location = useLocation().pathname;

    const id = location.split("/")[3]
    const {data,loading,error} =useFetch(`/trips/find/${id}`)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggling = () => setIsOpen(!isOpen);
    const [selectedOption, setSelectedOption] = useState(null)



    const onOptionClicked = value => () => {

        setSelectedOption(value);
        setIsOpen(false);

    };
    const handleAddToCart = (data) =>{
        dispatch(addToCart(data))
        navigate("/cart", {state:{selectedOption}})

    }



    data.available_days_start?.map((item,i)=> console.log(item, data.available_days_end[i]))
    const options=[
        data.available_days_start?.map((item,i)=>
                `Start Date : ${item} -   End Date : ${data.available_days_end[i]}`)
    ]

    return (

        <div>
            <Navbar></Navbar>
            <TripContainer>
                {loading?
                    (
                        <ReactLoading type="spin" color="#0071eb"
                                      height={100} width={100} />
                ):
                    (
                        <TripWrapper>
                            <TripTitle>{data.nameTrip}</TripTitle>
                            <TripDetails>
                                {
                                    data.photos?.map(item =>
                                        <TripImage src={item}></TripImage>
                                    )
                                }

                                <TripInfo>
                                    <TripSubTitle>{data.first_info}</TripSubTitle>
                                    <TripMain>
                                        <Item>
                                            <TextTitle><AiTwotoneCalendar></AiTwotoneCalendar> Days</TextTitle>
                                            <ItemInfo>
                                                <Text>{data.days_number} days</Text>
                                            </ItemInfo>
                                        </Item>
                                        <Item>
                                            <TextTitle><RiHotelLine></RiHotelLine> Accommodation</TextTitle>

                                            <ItemInfo>
                                                {data.accommodation?.map(item =>
                                                    <Text>{item}</Text>
                                                )}
                                            </ItemInfo>

                                        </Item>
                                        <Item>
                                            <TextTitle> <GiMeal></GiMeal> Meals</TextTitle>
                                            <ItemInfo>
                                                {data.meals?.map(item =>
                                                    <Text>{item}</Text>
                                                )}
                                            </ItemInfo>
                                        </Item>
                                        <Item>
                                            <TextTitle> <FaTelegramPlane></FaTelegramPlane> Transport</TextTitle>
                                            <ItemInfo>
                                                {data.transport?.map(item =>
                                                    <Text>{item}</Text>
                                                )}
                                            </ItemInfo>

                                        </Item>
                                        <Item>
                                            <TextTitle> <IoMdMap></IoMdMap> Countries</TextTitle>
                                            <ItemInfo>
                                                {data.countries?.map((item, i )=>
                                                    <Text>{i+1}. {item}</Text>
                                                )}
                                            </ItemInfo>
                                        </Item>
                                        <Item>
                                            <TextTitle> <GiModernCity></GiModernCity> Cities</TextTitle>
                                            <ItemInfo>
                                                {data.cities?.map((item, i) =>
                                                    <Text>{i+1}. {item}</Text>
                                                )}
                                            </ItemInfo>
                                        </Item>
                                    </TripMain>



                                    <DropDownContainer>
                                        {selectedOption === null?
                                            (<DropDownHeader onClick={toggling}>Choose available Date</DropDownHeader>)
                                            : (<DropDownHeader onClick={toggling}>{selectedOption}</DropDownHeader>)

                                        }

                                        {isOpen && (<DropDownListContainer>
                                            <DropDownList>
                                                <ListItem>
                                                        {options[0].map(item =>(
                                                                <DateText onClick={onOptionClicked(item)}>{item}</DateText>

                                                            ))}
                                                    </ListItem>


                                          </DropDownList>
                                        </DropDownListContainer>)}
                                   </DropDownContainer>


                                </TripInfo>
                            </TripDetails>
                            <TripDescription>
                                <Desc>
                                    <DescTitle>Trip Description</DescTitle>
                                    <DescText>{data.description}</DescText>
                                </Desc>
                                <Info>
                                    <PriceInfo>Price: {data.price}$</PriceInfo>
                                    <BtnContainer>
                                        <ButtonTrip style = {{backgroundColor: '#50d9b9', color: "#1e356d"}} onClick={() => navigate(-1)}>Go Back to Catalog</ButtonTrip>
                                        { selectedOption !== null?
                                            (<ButtonTrip onClick ={() => handleAddToCart(data)}>Add to Card</ButtonTrip>):
                                            (
                                                <ButtonTrip>Add to Card</ButtonTrip>
                                            )
                                        }
                                    </BtnContainer>
                                </Info>
                                {/*<BookButton>Book Now!</BookButton>*/}
                            </TripDescription>
                        </TripWrapper>
                    )
                    }
                <DownPart>
                    <MailList></MailList>
                    <Footer></Footer>
                </DownPart>

            </TripContainer>
        </div>
    );
};

export default Trip;