import React, {useState} from 'react';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {RecommendationList, ListImg, ListItem, ItemText, Button} from './RecommendationElement'
import './recommendation.css'
import country_1 from '../../images/country_img/austria-ski.webp'
import Trips from "../models/Trips";
import useFetch from "../../hooks/useFetch";
import ReactLoading from "react-loading";


const Recommendation = () => {
    const {data,loading,error} =useFetch("/trips?&limit=6")

    const [next, setNext] = useState(3);
    const handleMoreTrips = () => {
        setNext(next + 2);
    };

    return (
        <RecommendationList>
            {loading?(
                    <ReactLoading type="spin" color="#0071eb"
                                  height={100} width={100} />
            ):
                (<>
                {data.slice(0, next).map((item,i) =>
                    <ListItem>
                        <ListImg key={item.id} src={item.photos[0]}></ListImg>
                        <ItemText>
                            <h3>{i+1}. {item.nameTrip}</h3>
                            <p>
                                <ReactReadMoreReadLess
                                    readMoreClassName='readLessMore'
                                    readLessClassName='readLessMore'
                                    charLimit={250}
                                    readMoreText="Show more ▼"
                                    readLessText="Show less ▲"
                                >
                                    {item.description}
                                </ReactReadMoreReadLess>

                            </p>
                        </ItemText>
                    </ListItem>)}
                    <Button
                        onClick={handleMoreTrips}
                    >
                        View more
                    </Button>
            </>)}
        </RecommendationList>)
}

export default Recommendation;