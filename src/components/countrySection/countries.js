import React, {useState} from 'react';
import {CountriesList, CountriesNames, CountryItem, ImagCountry} from './CountryElements'
import Trips from "../models/Trips";
import {CountTripTypes, ListItem, TypeImg, TypeTitle} from "../travelTypes/TravelElements";
import norway from '../../images/country_img/norway.jpg'
import austria from '../../images/country_img/austria.jpg'
import sriLanka from '../../images/country_img/srilanka.jpg'
import SearchedTrip from "../searchedTrip/searchedTrip";
import useFetch from "../../hooks/useFetch";
import ReactLoading from "react-loading";

const Countries = () => {


    const {data,loading,error} =useFetch("/trips/countByCounty?countries=Norway,Austria,Sri Lanka")
    const images = [norway,austria,sriLanka]
    const countries = ["Norway", "Austria", "Sri Lanka"]



    return (
        <CountriesList>
            {loading?(
                    <ReactLoading type="spin" color="#0071eb"
                                  height={100} width={100} />
            ):
                (<>
                    {data.map((i,p) =>
                        <CountryItem>
                            <ImagCountry src={images[p]}></ImagCountry>
                            <CountriesNames>
                                <h1>{countries[p]}</h1>
                                <h2>{i} properties</h2>
                            </CountriesNames>
                        </CountryItem>)}
                </>)}

        </CountriesList>
    );
}

export default Countries;