import React from 'react';
import {Trip, InfoFoot, TripDescription,
       ImageTrip, TripTitle, InfoTrip, Star,
      TravelType, DPC, MainInfo, ItemPoint, CountriesName,
      VievButton, Price
}
    from './searchedTripElements'
import ReactStars from "react-rating-stars-component";

import {FiCalendar}  from 'react-icons/fi'
import {MdPlace}  from 'react-icons/md'
import {BiWorld}  from 'react-icons/bi'

const SearchedTrip = ({item}) => {

    return (
        <Trip>
            <ImageTrip src={item.photos[0]}></ImageTrip>
            <TripDescription>
                <CountriesName>{item.nameTrip}</CountriesName>
                <InfoTrip>
                    <Star>
                        <ReactStars
                            count={5}
                            value = {item.rating}
                            size={16}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700">
                        </ReactStars>
                        <span>{item.rating}</span>
                    </Star>
                    <TravelType>{item.typeTrip}</TravelType>
                </InfoTrip>
                <MainInfo>
                    <DPC>
                        <ItemPoint>
                            <FiCalendar></FiCalendar>
                            <p>{item.days_number} Days</p>
                        </ItemPoint>
                        <ItemPoint>
                            <MdPlace></MdPlace>
                            <p>{item.cities.length} Places</p>
                        </ItemPoint>
                        <ItemPoint>
                            <BiWorld></BiWorld><p>{item.countries.length} Countries</p>
                        </ItemPoint>
                    </DPC>
                    <TripTitle>{item.first_info}</TripTitle>
                    <InfoFoot>
                        <Price>{item.price} $</Price>
                        <VievButton to={`/trips/find/${item._id}`}>View Trip</VievButton>
                    </InfoFoot>

                </MainInfo>
            </TripDescription>

        </Trip>
    );
};

export default SearchedTrip;