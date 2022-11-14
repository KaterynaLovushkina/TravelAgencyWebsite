import React, {useRef, useState} from 'react';
import { Col, Button, Row, Container, Card } from "react-bootstrap";
import {Input} from "semantic-ui-react";
import {Link, useNavigate} from "react-router-dom";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import {DownPart} from "../trip/tripElements";
import {toast} from "react-toastify";
import {Formik, Form} from "formik";
import TextField from "../../components/form/TextField";
import * as Yup from "yup";


const SignIn = () => {
    const validate = Yup.object({
        email: Yup.string()
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                'Email is invalid'
            )
            .required("Email is required"),
        password: Yup.string()
            .min(6,'Password must be at least 6 characters')
            .required("Password is required"),
    })
    const navigate = useNavigate()
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const handleLogin = (val) =>{
        const loggedUser = JSON.parse(localStorage.getItem("user"))
        if(val.email === loggedUser.email && val.password === loggedUser.password){
            localStorage.setItem("loggedIn", true)
            navigate("/")
        }else{
            toast.error(`Wrong email or password`, {
                position: 'top-left'
            })
        }
    }
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={4} lg={5} xs={12}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h3 className="fw-bold pb-3" >Submit your form to Sign in</h3>
                                    <div className="mb-3">
                                        <Formik initialValues={{
                                            username: '',
                                            email: '',
                                            password: '',
                                            confirmPassword: '',
                                        }}
                                                validationSchema={validate}
                                                onSubmit={values => {

                                                    handleLogin(values)
                                                    // navigate("/success")
                                                }}

                                        >
                                            {formik => (

                                                <div>
                                                    <Form className={"d-grid gap-3 "}>
                                                        <TextField label={"Email"} name={'email'} type={'email'}></TextField>
                                                        <TextField label={"Password"} name={'password'} type={'password'}></TextField>
                                                        <div  style={{margin: "auto"}}>
                                                            <Button variant="primary" type="submit" style={{margin: "1.4rem 8rem 0.6rem 8rem " , width: '150px'}}
                                                            >
                                                                Login
                                                            </Button>
                                                        </div>
                                                        <div className={"text-center fs-5"}>
                                                            <p className={"d-inline p-xl-4"}>Don't have an account?</p>
                                                            <Link className={" d-inline text-decoration-none"} to ="/signUp">Sign up</Link>
                                                        </div>

                                                    </Form>
                                                </div>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <DownPart>
                <MailList></MailList>
                <Footer></Footer>
            </DownPart>
        </div>
    );
};

export default SignIn;