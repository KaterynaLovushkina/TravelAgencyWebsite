import React, {useState, useEffect} from 'react';
import Dropdown from 'react-dropdown';
import ReactLoading from "react-loading";
import 'react-dropdown/style.css';
import Navbar from "../../components/NavBar/navbar";
import {
    CatalogContainer, CatalogResult, CatalogSearch,
    CatalogWrapper, OptionInput, OptionItem, OptionsContainer,
    SearchButton, SearchInput, SearchItem, SearchSpan,
    SearchTitle, SearchContainer, DownPart
} from "./tripsElements"

import {useLocation} from "react-router-dom";
import {format} from "date-fns";
import DateRange from "react-date-range/dist/components/DateRange";


import Trips from "../../components/models/Trips";
import "./trips.css"
import SearchedTrip from "../../components/searchedTrip/searchedTrip";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import useFetch from "../../hooks/useFetch";
import axios from "axios";


const Catalog = () => {
    const location  = useLocation()
    const [data, setData] = useState([])
    const [filteredData,setFilteredData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [destination, setDestination]= useState(location.state.destination)
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options)
    const [openDate,setOpenDate] = useState(false)



    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                if (destination!== "") {
                    const res = await axios.get(`/trips?cities=${destination}`);
                    setData(res.data)
                    setFilteredData(res.data)

                } else{
                    const res = await axios.get(`/trips`);
                    setData(res.data);}
                }
            catch(err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    },[setData, setFilteredData,setError,setLoading]);




    const reFetch = async () => {

        setLoading(true);
        try {
            if (destination!== "") {

                const res = await axios.get(`/trips`,{
                 params:{
                     cities: {destination}
                 }
                }
                );
                setData(res.data);
            } else{
                const res = await axios.get(`/trips`);
                setData(res.data);}
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };


    const filterResultByType =async (calItem) => {
        if (calItem === "All"){
            const res = await axios.get(`/trips`);
            setData(res.data)
        }

        else{
           const res = await axios.get(`/trips`,{
               params:{
                   typeTrip: calItem
               }
           });
            // const result = res.data.filter((curData) => {
            //     return curData.typeTrip === calItem;
            // })
            setData(res.data)

        }
        console.log(data)


    }
    const filterResultByPrice =async (calItem) => {
        const res = await axios.get(`/trips`);
        if (calItem === "Min"){
            const result = [...res.data].sort((a, b) => {
                return a.price > b.price ? 1 : -1
            })
            setData(result)
        }else{
            const result = [...res.data].sort((a, b) => {
                return a.price > b.price ? -1 : 1
            })
            setData(result)
        }

            }


    const filterResultByTransport = async (calItem) => {
        if (calItem === "All"){
            const res = await axios.get(`/trips`);
            setData(res.data)
        }
        else{
            const res = await axios.get(`/trips`,{
                params: {
                    transport: calItem
                }
            });
            setData(res.data)
        }

    }

    const handleChangeInput = () => {
        reFetch()

    }
    return (
        <div>
            <Navbar></Navbar>
            <CatalogContainer>
                <CatalogWrapper>
                    <SearchContainer>
                        <CatalogSearch>
                            <SearchTitle>Search</SearchTitle>
                            <SearchItem>
                                <label style={{fontSize: '15px'}}>Destination</label>
                                <SearchInput placeholder={destination}
                                             type={'text'}
                                             onChange={item =>setDestination(item.target.value)}
                                ></SearchInput>
                            </SearchItem>
                            <SearchItem>
                                <label style={{fontSize: '15px'}}>Check-in and Check-out Date</label>
                                <SearchSpan onClick={() => setOpenDate(!openDate)}>
                                    {date && `${format(date[0].startDate, 'dd/MM/yyyy ') }
                                              to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                                </SearchSpan>
                                { openDate && <DateRange
                                    onChange={item => setDate([item.selection])}
                                    ranges={date}
                                    minDate={new Date()}
                                />}
                            </SearchItem>
                            <SearchItem>
                                <label style={{fontSize: '15px'}}>Options</label>
                                <OptionsContainer>
                                    <OptionItem>
                                        <span>Adult</span>
                                        <OptionInput type={'number'} placeholder ={options.adult} min={1}></OptionInput>
                                    </OptionItem>
                                    <OptionItem>
                                        <span>Children</span>
                                        <OptionInput type={'number'} placeholder ={options.children} min={0}></OptionInput>
                                    </OptionItem>
                                    <OptionItem>
                                        <span>Room</span>
                                        <OptionInput type={'number'} placeholder ={options.room} min={1}></OptionInput>
                                    </OptionItem>
                                </OptionsContainer>
                            </SearchItem>
                            <SearchButton onClick={() => handleChangeInput()}>Search</SearchButton>
                        </CatalogSearch>
                        <Dropdown
                                className={"DropTripTypes"}
                                placeholder='Choose Trip Travel'
                                options={[
                                    "All",
                                    "Hiking & Trekking",
                                    "Christmas Holiday",
                                    "Cruise",
                                    "Explorer"
                                ]}
                                selection
                                onChange={(e) =>filterResultByType(e.value)}
                            />
                            <Dropdown
                                className={"DropPrice"}
                                placeholder='Choose Type sorting by Price'
                                options={[
                                    "Min",
                                    "Max"
                                ]}
                                selection
                                onChange={(e) =>filterResultByPrice(e.value)}
                            />
                            <Dropdown
                                className={"DropTransport"}
                                placeholder='Choose Type sorting by Transport'
                                options={[
                                    "All",
                                    "Coach",
                                    "Flight",
                                    "Ferry",
                                    "Cruise"
                                ]}
                                selection
                                onChange={(e) =>filterResultByTransport(e.value)}
                            />


                    </SearchContainer>

                    <CatalogResult>
                        {loading?
                            <ReactLoading type="spin" color="#0071eb"
                                          height={100} width={100} />:
                            (
                                <>
                                    { destination!== ""?
                                        (
                                            data
                                                .filter(item => item.available_days_start.includes(date[0].startDate.toLocaleDateString()) )
                                                .filter(item => item.available_days_end.includes(date[0].endDate.toLocaleDateString()) )
                                                .map(trip =>{
                                                    return  <SearchedTrip item={trip} key={trip.id}></SearchedTrip>
                                                })
                                        ):
                                        (
                                            data.map(trip =>{
                                                return  <SearchedTrip item={trip} key={trip.id}></SearchedTrip>
                                            })
                                        )
                                    }




                                </>
                            )

                        }
                    </CatalogResult>
                </CatalogWrapper>
            </CatalogContainer>
            <DownPart>
                <MailList></MailList>
                <Footer></Footer>
            </DownPart>
        </div>
    )
}

export default Catalog