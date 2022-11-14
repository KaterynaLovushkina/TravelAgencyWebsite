import React, {useState} from 'react';
import {Form, Formik, useFormik} from "formik";
import TextField from "./TextField";
import Navbar from "../NavBar/navbar";
import MailList from "../mailList/mailList";
import Footer from "../footer/footer";
import {DownPart} from "../../pages/catalog/tripsElements";
import * as Yup from 'yup'
import {useNavigate} from "react-router-dom";

const CheckOut = () => {


    const validate = Yup.object({
        name: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .min(2,'The name is too short')
            .required("Required"),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .min(3,'The lastname is to short')
            .required("Required"),
        email: Yup.string()
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                'Email is invalid'
            )
            .required("Email is required"),
        password: Yup.string()
            .min(6,'Password must be at least 6 characters')
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password must match")
            .required("Confirm password is required"),
        phone: Yup.string()
            .matches(/[0-9]{3}(-){0,1}[0-9]{3}(-){0,1}[0-9]{4}/,
                "Incorrect phone number")
            .required("Confirm password is required"),
    })
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
        <div className={"container flex-column" } style={{width: "600px"}}>
        <Formik initialValues={{
            name: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: ''
        }}
                validationSchema={validate}
                onSubmit={values => {
                    console.log(values)
                    navigate("/success")
                }}
                onReset={(values)=>{
                    handleCatalog()
                }}
        >
            {formik => (

                <div>
                    <h1 className="my-4 font-weight-bold" style={{paddingLeft: "180px"}}>Check out</h1>
                    <Form className={"d-grid gap-3"}>
                        <div className="d-flex flex-row justify-content-around">
                        <TextField label={"First Name"} name={'name'} type={'text'}></TextField>
                        <TextField label={"Last Name"} name={'lastName'} type={'text'}></TextField>
                        </div>
                        <div className="d-flex flex-row justify-content-around">
                        <TextField label={"Password"} name={'password'} type={'password'}></TextField>
                        <TextField label={"Confirm Password"} name={'confirmPassword'} type={'password'}></TextField>
                        </div>
                        <div className={"d-flex flex-column gap-2"} style={{marginLeft: "50px", marginRight: "45px"}}>
                        <TextField label={"Email"} name={'email'} type={'email'}></TextField>
                        <TextField label={"Phone"} name={'phone'} type={'number'}></TextField>
                        </div>
                        <div className="container  mt-5 mb-4 d-flex flex-row justify-content-between ">
                            <button type="reset" className="btn btn-primary w-25">Go back</button>
                            <button  className="btn btn-success w-25" type="submit">Submit</button>
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
        </div>


            <DownPart>
                <MailList></MailList>
                <Footer></Footer>
            </DownPart>
            </>
    );

};

export default CheckOut;