import React, {useState} from 'react';
import Video from '../../video/video.mp4'
import {FaBed}  from 'react-icons/fa'
import {BiCalendar}  from 'react-icons/bi'
import {FaUser}  from 'react-icons/fa'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'
import {useNavigate} from "react-router-dom"

import {HeroContainer, HeroP, VideoBg, HeroContent, HeroH1, HeroBg,
        HeroSearchWrapper, HeaderSearchItem, Input, HeaderSearchText,
        OptionCounterButton, OptionItem, OptionCounter, Options, HeaderBtn}
    from './HeroElements'
import './hero.css'
const Hero = () => {
    const [destination, setDestination] = useState(" ")
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
    const handleOption = (name,operation) => {
        setOptions( prev =>{
            return {
            ...prev,
            [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
        };
        });
    };
    const handleSearch = () =>{
        navigate("/catalog", {state:{destination,date,options }})
    }
    return (
        <div>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video}> type='video.mp4'</VideoBg>
                </HeroBg>
                <HeroContent>
                    <HeroH1>Ready to travel worldwide?</HeroH1>
                    <HeroP>Inspire a new perspective on the world with Us</HeroP>
                </HeroContent>
                <HeroSearchWrapper>
                    <HeaderSearchItem>
                    <FaBed className={'heroIcon'}></FaBed>
                    <Input type={'text'}
                           placeholder={'Where are you going?'}
                           onChange = {e=>setDestination(e.target.value)}
                    ></Input>
                    </HeaderSearchItem>
                    <HeaderSearchItem>
                        <BiCalendar className={'heroIcon'}></BiCalendar>
                        <HeaderSearchText onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'dd/MM/yyyy')}
                                             to ${format(date[0].startDate, 'dd/MM/yyyy')}`}</HeaderSearchText>
                        { openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className ={'date'}
                        />}
                    </HeaderSearchItem>
                    <HeaderSearchItem>
                        <FaUser className={'heroIcon'}></FaUser>
                        <HeaderSearchText onClick={() => setOpenOptions(!openOptions)}>{`${options.adult} adult • ${options.children} children •${options.room} room`}</HeaderSearchText>
                        {openOptions && <Options>
                            <OptionItem>
                                <span className={'OptionText'}>Adult</span>
                                <OptionCounter>
                                    <OptionCounterButton
                                        disabled={options.adult <= 1}
                                        onClick={() => handleOption("adult", "d")}>-</OptionCounterButton>
                                    <span className={'OptionCounterNumber>'}>{options.adult}</span>
                                    <OptionCounterButton
                                        onClick={() => handleOption("adult", "i")}>+</OptionCounterButton>
                                </OptionCounter>
                            </OptionItem>

                            <OptionItem>
                                <span className={'OptionText'}>Children</span>
                                <OptionCounter>
                                    <OptionCounterButton
                                        disabled={options.children <= 0}
                                        onClick={() => handleOption("children", "d")}>-</OptionCounterButton>
                                    <span className={'OptionCounterNumber>'}>{options.children}</span>
                                    <OptionCounterButton
                                        onClick={() => handleOption("children", "i")}>+</OptionCounterButton>
                                </OptionCounter>
                            </OptionItem>

                            <OptionItem>
                                <span className={'OptionText'}>Room</span>
                                <OptionCounter>
                                    <OptionCounterButton
                                        disabled={options.room <= 1}
                                        onClick={() => handleOption("room", "d")}
                                    >-</OptionCounterButton>
                                    <span className={'OptionCounterNumber>'}>{options.room}</span>
                                    <OptionCounterButton
                                        onClick={() => handleOption("room", "i")}>+</OptionCounterButton>
                                </OptionCounter>
                            </OptionItem>
                        </Options>}
                    </HeaderSearchItem>
                    <HeaderSearchItem>
                       <HeaderBtn onClick = {handleSearch}>Search</HeaderBtn>
                    </HeaderSearchItem>
                </HeroSearchWrapper>



            </HeroContainer>
        </div>
    );
};

export default Hero;