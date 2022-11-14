import React, {useState} from 'react';
import Navbar from "../NavBar/navbar";
import MailList from "../mailList/mailList";
import Footer from "../footer/footer";
import {DownPart} from "../../pages/catalog/tripsElements";
import {Image} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";

const Success = () => {
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

    return (
        <>
            <Navbar></Navbar>
            <div  className={"container flex-column w-50 d-flex align-items-center mt-lg-5 mb-5" }>
                <Image style={{width: '300px'}}src={require("../../images/cards/plane.png")}></Image>
                <h1 className={"font-weight-bold text-success mt-3"} >Success!</h1>
                <div className={"fs-4 p-lg-2 text-lg-center"} style={{ lineHeight: "20px"}}>
                <p>Your trip was send to processing</p>
                <p>Check your email for futher information</p>
                </div>
                <button type={"button"} onClick={handleCatalog} className={"btn btn-primary w-25 mt-4"}>Go back to Catalog</button>
            </div>
            <DownPart>
                <MailList></MailList>
                <Footer></Footer>
            </DownPart>
            
        </>
    );
};

export default Success;