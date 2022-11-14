import React, {useState} from 'react';
import {ListItem, TypesList, TypeTitle, TypeImg, CountTripTypes} from './TravelElements'
import './travelTypes.css'
import hikingImg from '../../images/travel_types/hiking.jpeg';
import explorerImg from '../../images/travel_types/explorer.jpeg';
import cruiseImg from '../../images/travel_types/cruise.jpeg';
import christmasImg from'../../images/travel_types/christmas.jpeg';
import useFetch from "../../hooks/useFetch";
import ReactLoading from "react-loading";

const TravelTypes = () => {
    const {data,loading,error} =useFetch("/trips/countByType")
    const images = [hikingImg,explorerImg,cruiseImg,christmasImg]
    return (
        <TypesList>
            {loading?(
                    <ReactLoading type="spin" color="#0071eb"
                                  height={100} width={100} />
            ):
                (<>
                {
                    images.map((img,i) =>
                        <ListItem className={'ListItem'}>
                            <TypeImg src={img}></TypeImg>
                            <TypeTitle>{data[i]?.type}</TypeTitle>
                            <CountTripTypes>{data[i]?.count} tours</CountTripTypes>
                </ListItem> )}
            </>)}

        </TypesList>

    );
}

export default TravelTypes;